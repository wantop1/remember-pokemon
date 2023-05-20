import SkeletonElement from "./SkeletonElement";
import Card from "../Card";
import Flex from "../Flex";

const PokemonInfoSkeleton = () => {
  return (
    <Card width="25rem" margin="0 2rem" position="relative">
      <Flex justifyContent='space-between'>
        <Flex>
        <SkeletonElement width="5rem" height="1.5rem"/>
        <SkeletonElement width="5rem" height="1.5rem"/> 
        </Flex>
        <Flex>
        <SkeletonElement width="5rem" height="1.5rem" />
        <SkeletonElement width="5rem" height="1.5rem" /> 
        </Flex>
      </Flex>

      <Flex>
        <SkeletonElement width="80%" height="20rem" />
      </Flex>

      <Flex>
        <SkeletonElement width="5rem" height="1rem" />
        <SkeletonElement width="5rem" height="1rem" />
      </Flex>

      <Flex>
      <SkeletonElement width="100%" height="3rem" />
      </Flex>
    </Card>
  );
};

export default PokemonInfoSkeleton;
