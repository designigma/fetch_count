import { describe, it, expect, beforeEach, vi } from 'vitest';
import { useAppStore } from './useAppStore';
import axios from 'axios';

// Mock axios so we don't make real network requests during testing
vi.mock('axios');
const mockedAxios = vi.mocked(axios, true);

describe('useAppStore', () => {
  // Reset the store before each test to ensure a clean slate
  beforeEach(() => {
    useAppStore.setState({
      data: [],
      fetchCount: 0,
      isLoading: false,
      error: null,
    });
    vi.clearAllMocks();
  });

  it('should have the correct initial state', () => {
    const state = useAppStore.getState();
    expect(state.data).toEqual([]);
    expect(state.fetchCount).toBe(0);
    expect(state.isLoading).toBe(false);
    expect(state.error).toBeNull();
  });

  it('should fetch data and update state successfully', async () => {
    const mockPosts = [
      { id: 1, title: 'Test Post 1', body: 'Test Body 1' },
      { id: 2, title: 'Test Post 2', body: 'Test Body 2' },
    ];
    
    // Simulate a successful API response
    mockedAxios.get.mockResolvedValueOnce({ data: mockPosts });

    const store = useAppStore.getState();
    
    // Trigger the fetch
    await store.fetchData();

    // Verify the state was updated correctly
    const updatedState = useAppStore.getState();
    expect(updatedState.data).toEqual(mockPosts);
    expect(updatedState.fetchCount).toBe(1);
    expect(updatedState.isLoading).toBe(false);
    expect(updatedState.error).toBeNull();
  });

  it('should handle API errors correctly', async () => {
    // Simulate an API failure
    mockedAxios.get.mockRejectedValueOnce(new Error('Network Error'));

    const store = useAppStore.getState();
    
    await store.fetchData();

    const updatedState = useAppStore.getState();
    expect(updatedState.data).toEqual([]); // Data shouldn't change
    expect(updatedState.fetchCount).toBe(0); // Count shouldn't increase on failure
    expect(updatedState.isLoading).toBe(false);
    expect(updatedState.error).toBe('Failed to fetch data');
  });

  it('should reset the fetch count to 0', () => {
    // Force the count to be 5 manually
    useAppStore.setState({ fetchCount: 5 });
    
    const store = useAppStore.getState();
    store.resetCount(); // Call our new function
    
    expect(useAppStore.getState().fetchCount).toBe(0); // Verify it went back to 0
  });
});