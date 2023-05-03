import styled from "styled-components";

const FoodTileImg = styled.div`
  padding-top: calc(100% * 632 / 421);
  width: 100%;
  background-image: url("${({ url }) => url}");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin: 0;
  margin-bottom: 16px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 34vw;
    height: auto;
    min-width: 114px;
    margin: 0;
  } ;
`;
const FoodInfoWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-left: 16px;
  } ;
`;
const FoodTileHeader = styled.h2`
  margin: 0;
  font-family: Poppins;
  font-weight: 500;
  margin-bottom: 8px;
  font-size: 22px;
  line-height: 130%;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
    margin-bottom: 4px;
  } ;
`;
const FoodTileYear = styled.p`
  margin: 0;
  font-family: Poppins;
  margin-bottom: 8px;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.color.darkerGrey};
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 16px;
  } ;
`;
const FoodTileTags = styled.ul`
  margin: 0;
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin-left: -8px;
  margin-bottom: 45px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-bottom: 16px;
  } ;
`;
const MovieTileTag = styled.li`
  background-color: ${({ theme }) => theme.color.grey};
  font-family: Poppins;
  font-size: 14px;
  line-height: 140%;
  border-radius: 5px;
  margin-left: 8px;
  margin-bottom: 8px;
  padding: 8px 16px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 4px 8px;
    font-size: 10px;
    margin-bottom: 8px;
  } ;
`;
const FoodAdditionalInfo = styled.div`
  margin: 0;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    position: relative;
  } ;
`;
const FoodRatingImg = styled.img`
  width: 24px;
  transform: translateY(-8%);
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 16px;
  } ;
`;
const FoodRatingText = styled.p`
  margin-right: 12px;
  font-family: Poppins;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  margin: 0 12px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
    line-height: 130%;
  } ;
`;
const FoodRatingVotes = styled.p`
  margin: 0;
  font-family: Poppins;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.color.darkerGrey};
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
    line-height: 130%;
  } ;
`;

export {
  FoodTileImg,
  FoodTileHeader,
  FoodTileYear,
  FoodTileTags,
  MovieTileTag,
  FoodAdditionalInfo,
  FoodRatingImg,
  FoodRatingText,
  FoodRatingVotes,
  FoodInfoWrapper,
};
