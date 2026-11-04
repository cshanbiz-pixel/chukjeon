import type { Festival } from '../types/festival';

// 실데이터 전환 시 false로 변경하고 다시 빌드합니다.
// noindex, robots.txt 차단, 샘플 문구, 시안 사진 매핑을 한 번에 해제합니다.
export const siteConfig = { sampleMode: true };

// JSON 원문과 스키마를 바꾸지 않는 샘플 화면 전용 표시 설정입니다.
const samplePresentation: Record<string, { image: string; subtitle: string }> = {
  'sample-001': { image: 'autumn.jpg', subtitle: '바쁜 일상은 잠시 내려놓고, 가을빛으로 물든 정원을 걸어보세요.' },
  'sample-002': { image: 'market.jpg', subtitle: '골목을 따라 흐르는 작은 음악과 따뜻한 인사를 만나는 시간.' },
  'sample-003': { image: 'night.jpg', subtitle: '오래된 거리 위에 작은 불빛과 새로운 취향이 모입니다.' },
  'sample-004': { image: 'garden.jpg', subtitle: '좋아하는 책 한 권과 함께 시작하는 느긋한 가을 피크닉.' },
  'sample-005': { image: 'night.jpg', subtitle: '선선한 바람과 음악이 만나는, 오래 기억하고 싶은 밤.' },
  'sample-006': { image: 'garden.jpg', subtitle: '숲과 호수 사이, 나만의 속도로 가을을 즐기는 하루.' },
  'sample-007': { image: 'autumn.jpg', subtitle: '노란 햇살 아래, 온 가족이 함께 즐기는 작은 계절 여행.' },
  'sample-008': { image: 'night.jpg', subtitle: '호기심이 반짝이는 밤, 아이와 함께 새로운 세상을 만나요.' },
  'sample-009': { image: 'market.jpg', subtitle: '만드는 사람의 이야기를 듣고 손끝의 취향을 발견해요.' },
  'sample-010': { image: 'market.jpg', subtitle: '가을의 마지막 페이지에 따뜻한 추억 하나를 남겨보세요.' },
};

const regionNames: Record<string, string> = {
  '전북특별자치도': '전북', '서울특별시': '서울', '부산광역시': '부산',
  '강원특별자치도': '강원', '제주특별자치도': '제주', '대전광역시': '대전',
  '광주광역시': '광주', '경기도': '경기',
};

export function festivalPresentation(festival: Festival) {
  const sample = siteConfig.sampleMode ? samplePresentation[festival.id] : undefined;
  return {
    image: sample ? `/images/${sample.image}` : festival.thumb ?? festival.image,
    detailImage: sample ? `/images/${sample.image}` : festival.image ?? festival.thumb,
    subtitle: sample?.subtitle ?? festival.overview.split('\n')[0],
    region: `${regionNames[festival.sido] ?? festival.sido} ${festival.sigungu.replace(/(시|군|구)$/, '')}`,
  };
}

export function displayValue(value: string): string {
  return siteConfig.sampleMode ? value.replace(/\s*\(가상[^)]*\)/g, '').trim() : value;
}
