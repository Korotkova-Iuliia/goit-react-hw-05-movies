import { Oval } from 'react-loader-spinner';
import { SpinnerWrepper } from './Loader.styled';
export const Loader = () => {
  return (
    <SpinnerWrepper>
      <Oval
        ariaLabel="isLoading-indicator"
        height={70}
        width={70}
        strokeWidth={4}
        color="gray"
        secondaryColor="#c4c4c4"
      />
    </SpinnerWrepper>
  );
};
