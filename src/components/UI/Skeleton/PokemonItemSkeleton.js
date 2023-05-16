import SkeletonElement from "./SkeletonElement";
import Card from "../Card";
import Flex from "../Flex";

const PokemonItemSkeleton = () => {
  return (
    <Card>
      <SkeletonElement />
      <SkeletonElement />
      <Flex justifyContent="flex-start">
        <SkeletonElement width="5rem" height="1.5rem" />
        <SkeletonElement width="5rem" height="1.5rem" />
      </Flex>
      <SkeletonElement width="80%" height="15rem" />
    </Card>
  );
};

export default PokemonItemSkeleton;
