import { Banner, BannerType } from "@components/Banner";
import { Carousel } from "@components/Carousel";
import { Section } from "@components/Section";
import { ChartList } from "./ChartList";

// TODO: 데이터 이동
const BANNER_LIST: BannerType[] = [
  {
    category: "한터차트",
    title: "세계 유일의 실시간 음악차트, 한터차트",
    image: "/images/main_banner_1.webp",
    bgColor: "#4e77ff",
    link: {
      url: "https://www.hanteochart.com/",
      name: "보러가기",
    },
    duration: {
      start: "2020-02-08T10:00",
      end: "2020-04-08T17:00",
    },
  },
  {
    category: "한터뮤직 어워드",
    title: "2023년을 빛낸 아티스트와 팬덤 여러분을 초대합니다.",
    image: "/images/main_banner_2.png",
    bgColor: "#000000",
    link: {
      url: "https://awards.hanteo.com/?m=false&l=ko",
      name: "투표하기",
    },
    duration: {
      start: "2024-02-17T00:00",
      end: "2025-02-18T00:00",
    },
  },
  {
    category: "세븐틴",
    title: "SEVENTEENTH HEAVEN SEVENTEEN",
    image: "/images/main_banner_3.png",
    bgColor: "#e5ecff",
    duration: {
      start: "2025-02-08T10:00",
      end: "2025-04-08T17:00",
    },
  },
];

export default function ChartPage() {
  return (
    <>
      <Section noPaddingX>
        <h2 className="sr-only">차트 페이지의 배너</h2>
        <Carousel
          items={BANNER_LIST.map((banner) => (
            <Banner data={banner} />
          ))}
        />
      </Section>

      <ChartList />
    </>
  );
}

ChartPage.pageName = "차트";
