// this function is for coloring RSV segments when visualizing
export const segmentColor = (discarded: boolean) => {
  if (discarded) {
    return '#9CA3AF';
  }
  return '#34D399';
};
