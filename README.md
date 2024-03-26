# React 로 구현하는 콘텐츠 뷰

<img width="385" alt="image" src="https://github.com/JayeHa/content-view/assets/66169832/a27b2b59-3b25-4270-92b3-2a1a376d9a96">

## 프로젝트 기본 정보

- 개발 기간: `2024.03.24` - `2024.03.26`
- 배포 링크: [content-view.vercel.app](https://content-view.vercel.app/)
- 깃허브 링크: [github.com/JayeHa/content-view](https://github.com/JayeHa/content-view)

## 시작하기

### 개발 환경

- Node.js v18.19.1
- pnpm v8.14.3

## 설치 및 실행방법

프로젝트를 로컬 환경에서 실행하기 위해 다음 단계를 따라 주세요

```bash
git clone https://github.com/JayeHa/content-view.git
cd content-view

pnpm install
pnpm dev
```

## 기술 스택

- **Frontend**: React, TypeScript, Tailwind CSS
- **Routing**: React Router
- **State Management & Data Fetching**: React Query, Axios
- **Build Tool**: Vite

## 프로젝트 구조

```
📦content-view
 ┣ 📂public
 ┣ 📂src
 ┃ ┣ 📂components
 ┃ ┣ 📂hocs
 ┃ ┣ 📂hooks
 ┃ ┣ 📂layouts
 ┃ ┣ 📂mocks
 ┃ ┣ 📂models
 ┃ ┣ 📂pages
 ┃ ┣ 📂service
 ┃ ┣ 📂styles
 ┃ ┣ 📂utils
 ┃ ┣ 📜App.tsx
 ┃ ┣ 📜main.tsx
 ┃ ┣ 📜router.tsx
 ┃ ┗ 📜vite-env.d.ts
 ┣  // ...
 ┗ 📜index.html
```

## 주요 기능

## 1. 무한 스크롤 구현

![무한스크롤](https://github.com/JayeHa/content-view/assets/66169832/866e7d40-0b3c-4cf5-935f-2b7b8a47c05d)

- **`IntersectionObserver API`를 활용한 구현**: 스크롤 이벤트 대신 `IntersectionObserver`를 활용해 무한 스크롤을 구현했습니다.
- **`useIntersect` 커스텀 훅**: 이 훅을 통해 간단하게 `IntersectionObserver`를 설정하여, 감지할 요소의 가시성 변화에 따라 콜백 함수를 실행합니다. [useIntersect](./src/hooks/useIntersect.tsx)에서 확인할 수 있습니다.
- **`InfiniteScrollWrapper` 컴포넌트 적용**: `InfiniteScrollWrapper` 에서 자식 컴포넌트 하단에 `div` 요소를 배치하여, 이 `div`의 가시성을 감지하여 데이터 페칭이 이루어지도록 구현했습니다.[InfiniteScrollWrapper](./src/components/InfiniteScrollWrapper/index.tsx)에서 확인할 수 있습니다.

#### 사용 예시

```typescript
export const Example = () => {
  const { data, hasNextPage, isFetching, fetchNextPage } = useInfiniteQuery();

  return (
    <InfiniteScrollWrapper
      hasNextPage={hasNextPage}
      fetchNextPage={fetchNextPage}
      isFetching={isFetching}
    >
      {/* 콘텐츠 렌더링 */}
    </InfiniteScrollWrapper>
  );
};
```

### 2. 배너 구현

![배너_외부_링크](https://github.com/JayeHa/content-view/assets/66169832/29d83172-3550-4c4b-b7cf-ed9744affaab)

- **`react-slick`을 이용한 슬라이드 배너**: `react-slick` 라이브러리를 사용하여 슬라이드 배너를 구현했습니다. 설정된 외부 링크가 있을 경우 사용자가 배너를 클릭할 때 해당 링크로 이동합니다.

### 3. 카테고리 간 이동 기능

![탭_클릭_이동](https://github.com/JayeHa/content-view/assets/66169832/4fa44709-b322-49f5-bb7f-1a11609b8233)
![슬라이드_터치](https://github.com/JayeHa/content-view/assets/66169832/a26c97ba-928a-4b02-aa3b-e69a02a09d8a)

### 1) 탭 클릭 이동

- **상단 탭 클릭으로 페이지 이동**: 사용자가 상단의 탭 메뉴를 클릭하여 각 카테고리 페이지로 쉽게 이동할 수 있습니다. `react-router-dom`의 `Link` 컴포넌트를 사용합니다. 이는 [GlobalHeader](./src/components/GlobalHeader.tsx)에서 확인할 수 있습니다.
- **페이지 라우터 구현**: 페이지 파일 이름을 기반으로 자동으로 라우팅을 설정하는 기능을 구현함으로써, 개발자가 새로운 카테고리 페이지를 추가할 때 라우팅 설정을 수동으로 할 필요가 없게 했습니다. 이는 vite의 동적 import 기능을 활용해 구현했으며, [router.tsx](./src/router.tsx) 파일에서 확인할 수 있습니다.

### 2) 슬라이드 터치 이동

- **모바일 최적화**: 슬라이드 터치 이동 기능은 모바일에서만 가능하도록 구현했습니다.
- **터치 이벤트 처리**: 사용자의 터치 슬라이드 동작을 감지하고 처리하기 위해 터치 이벤트를 활용합니다. 이를 통해 사용자가 화면을 좌우로 스와이프할 때 해당 방향으로 페이지 이동이 가능하도록 구현했습니다. [SlideMobileTouch](./src/hocs/withSlideMobileTouch/SlideMobileTouch.tsx)에서 확인할 수 있습니다.
- **withSlideMobileTouch HOC**: 고차 컴포넌트를 사용하여, 슬라이드 터치 기능을 쉽게 다른 컴포넌트에 적용할 수 있습니다.[withSlideMobileTouch](./src/hocs/withSlideMobileTouch/index.tsx)에서 확인할 수 있습니다.

#### 사용 예시

```typescript
export const ExampleComponent = withSlideMobileTouch(
  Component,
  50 // 스와이프 인식 임계값
);
```
