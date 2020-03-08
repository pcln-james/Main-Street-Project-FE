import { renderHook } from '@testing-library/react-hooks';
import useAxios from 'hooks/useAxios';
import useDonorsRequest from './useDonorsRequest';
import { DONORS_API_PATH } from 'constants/api';

jest.mock('hooks/useAxios');

const expectedRequest = {
    url: DONORS_API_PATH,
    method: 'get',
};

const expectedResponse = {
    isLoading: false,
    donors: [],
};

describe ('useDonorsRequest', () => {
    it ('default request sends get request', () => {
        const mockRequest = jest.fn();
        mockRequest.mockReturnValue(expectedResponse);
        useAxios.mockImplementation(mockRequest);

        const { result } = renderHook(() => useDonorsRequest());

        expect(useAxios).toBeCalledWith(expectedRequest);
        expect(result.current).toBe(expectedResponse);
    });
});
