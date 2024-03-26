import { useFetchBannerList } from "@/service/useBannerService";
import { Banner } from "@components/Banner";
import { Carousel } from "@components/Carousel";
import { Section } from "@components/Section";
import { ChartList } from "./ChartList";

export default function ChartPage() {
  const { data: bannerList } = useFetchBannerList();

  return (
    <>
      <Section noPaddingX>
        <h2 className="sr-only">차트 페이지의 배너</h2>
        <Carousel
          items={bannerList?.map((banner) => <Banner data={banner} />)}
        />
      </Section>

      <ChartList />
    </>
  );
}

ChartPage.pageName = "차트";
