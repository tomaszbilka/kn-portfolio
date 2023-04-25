import GenericButton from './GenericButton';

const TransparentButton: React.FC = () => {
  return (
    <GenericButton
      backgroundColor="transparent"
      border="1px dashed #000"
      borderRadius={5}
      color="#000"
      title="Transparent"
    />
  );
};

export default TransparentButton;
