import { Flex, Skeleton, SkeletonCircle, StackDivider, VStack } from "@/app/components/common";

const LoadingComments = () => {
  return (
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={4}
      as="ul"
      align="stretch"
      px={4}
    >
      <CommentSkeltonItem />
      <CommentSkeltonItem />
      <CommentSkeltonItem />
    </VStack>
  );
};

const CommentSkeltonItem = () => {
  return (
    <Flex as="li" listStyleType="none" align="center">
      <SkeletonCircle size="8" mr={4} />
      <Skeleton height="14px" width="60%" />
    </Flex>
  );
};

export default LoadingComments;
