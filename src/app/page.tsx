import {
  homeApplicationCardsData,
  homeFooterCardsData,
  homeMainCardsData,
  homeSliderData,
} from '@/constants/home';

import { ContentWrapper, SliderHeader } from '@/templates/common';
import {
  HomeApplicationCards,
  HomeBlogCards,
  HomeFooterCards,
  HomeInterview,
  HomeMainCards,
} from '@/templates/home';

export default function Home() {
  return (
    <>
      <SliderHeader sliderData={homeSliderData} />
      <ContentWrapper>
        <HomeMainCards title='에이블클라우드의 새로운 소식' cardsData={homeMainCardsData} />
        <HomeApplicationCards
          title='ABLESTACK을 선택해야 하는 이유'
          cardsData={homeApplicationCardsData}
        />
      </ContentWrapper>
      <ContentWrapper bgClassName='bg-[#DDE8FF]'>
        <HomeInterview title='최고의 가상화 플랫폼, ABLESTACK을 선택한 기업들' />
      </ContentWrapper>
      <ContentWrapper>
        <HomeBlogCards />
      </ContentWrapper>
      <ContentWrapper>
        <HomeFooterCards cardsData={homeFooterCardsData} />
      </ContentWrapper>
    </>
  );
}
