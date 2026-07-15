window.TOURMAP_CONTENT = {
  site: {
    title: '다카마쓰런',
    intro: '숙소 기준으로 각 목적지까지 예상 소요시간, 볼거리, 먹을거리 확인하는 지도',
    stayBadge: '🏠 숙소 — 카타하라마치 근처',
    legend: {
      hub: '숙소',
      rail: '육상 (철도·버스)',
      ferry: '페리',
      airport: '공항'
    },
    airport: {
      title: '✈️ 다카마쓰공항 ↔ 숙소',
      timeLabel: '왕복 이동시간',
      timeValue: '편도 약 1시간 (리무진버스 또는 전철)'
    },
    detail: {
      roundTripPrefix: '왕복',
      totalTimePrefix: '왕복+체류 약',
      seeHeading: '볼거리',
      eatHeading: '먹을거리'
    }
  },

  hub: {lat:34.346, lng:134.054, label:'숙소'},
  airport: {lat:34.215, lng:134.015, label:'다카마쓰공항'},

  modules: [
    {
      id:'A', name:'다카마쓰 시내', mode:'rail',
      def:'숙소 근처 다카마쓰 시내 코스',
      stops:[{lat:34.335, lng:134.040, label:'리쓰린공원'},{lat:34.341, lng:134.049, label:'미나미신마치 상점가'}],
      roundTrip:'왕복 30분 이내', roundTripMin:30,
      stayLabel:'마음대로 (관광 1~2시간 + 식사 1시간 기준 추정)', stayMin:180,
      see:['리쓰린공원','다카마쓰 성터','미나미신마치 상점가 등'],
      eat:['안모치 조니','와산본 화과자','호네쓰키도리','올리브 방어','올리브규','사와라','쇼유마메 등'],
      note:'물꺼는 다른 코스 이후 저녁 시간대에 자유롭게 끼워넣기 좋음'
    },
    {
      id:'B', name:'미토요', mode:'rail',
      def:'서쪽 미토요시 포토스팟 코스',
      stops:[{lat:34.193, lng:133.648, label:'지치부가하마'},{lat:34.117, lng:133.617, label:'제니가타 스나에'}],
      roundTrip:'왕복 약 4시간 40분', roundTripMin:280,
      stayLabel:'관광 1.5~2시간 + 간식 30분~1시간', stayMin:135,
      see:['지치부가하마 (일몰 시간대 베스트)','제니가타 스나에'],
      eat:['타코반'],
      note:'포토스팟이 유명한데 이동시간에 비해 가치가 상당히 떨어짐'
    },
    {
      id:'C', name:'사카이데·마루가메·젠츠지', mode:'rail',
      def:'서쪽 사카이데시 + 더 남쪽 마루가메·젠츠지까지 묶은 코스',
      stops:[
        {lat:34.354, lng:133.826, label:'세토대교 기념공원'},
        {lat:34.313, lng:133.805, label:'시코쿠 수족관'},
        {lat:34.288, lng:133.803, label:'마루가메성'},
        {lat:34.235, lng:133.792, label:'젠츠지'}
      ],
      roundTrip:'왕복 약 3시간', roundTripMin:165,
      stayLabel:'관광 4~5시간(마루가메성·젠츠지 포함 시) + 식사 1시간, 사카이데만 돌 경우 관광 3~4시간', stayMin:330,
      see:['세토대교 기념공원','시코쿠 수족관','마루가메성','젠츠지 등'],
      eat:['핏피메시','마루가메 현지 우동'],
      note:'사카이데만 치면 크게 멀지 않고 풍경 둘러보기 좋으며 자전거 가능'
    },
    {
      id:'D', name:'고토히라', mode:'rail',
      def:'시코쿠 대표 우동 관광지 코스',
      stops:[{lat:34.187, lng:133.809, label:'고토히라궁'}],
      roundTrip:'왕복 약 2시간 10분', roundTripMin:130,
      stayLabel:'우동 1시간 + 고토히라궁 2시간', stayMin:180,
      see:['고토히라궁'],
      eat:['정통 사누키 우동','오뎅(겨자 초된장)'],
      note:'고토히라궁은 제대로 등산할 각오 되어있으면 1368계단, 겁쟁이면 785계단이고 원조 사누키 우동 가능'
    },
    {
      id:'E', name:'쇼도시마', mode:'ferry',
      def:'배타고 들어가는 쇼도시마 섬 코스',
      stops:[
        {lat:34.492, lng:134.176, label:'도쿠노쇼항'},
        {lat:34.479, lng:134.190, label:'엔젤로드'},
        {lat:34.474, lng:134.272, label:'올리브공원'},
        {lat:34.472, lng:134.317, label:'모리쿠니 사케 양조장'}
      ],
      roundTrip:'왕복 약 2시간 40분', roundTripMin:160,
      stayLabel:'양조장 1시간 + 점심 1시간 + 올리브공원 1시간 + 엔젤로드(간조 시간대 맞을 때만) 1시간 + 섬 내 이동시간 2~3시간', stayMin:390,
      see:['올리브공원 (그리스풍 풍차)','엔젤로드 (간조 시 도보 가능)','모리쿠니 사케 양조장 (멀어서 시간 봐야 함)'],
      eat:['데노베 소면(올리브오일 반죽)','올리브오일 아이스크림 등'],
      note:'자전거로 최대한 이동 후 페리 선착장까지 버스로 복귀하는 일정을 짜야함'
    },
    {
      id:'F', name:'나오시마', mode:'ferry',
      def:'배타고 들어가는 나오시마 섬 코스',
      stops:[{lat:34.460, lng:133.997, label:'미야노우라항'}],
      roundTrip:'왕복 약 2시간 20분', roundTripMin:140,
      stayLabel:'미술관·야외 조형물 관람 3~4시간 (섬 내 이동 포함)', stayMin:210,
      see:['베네세 아트사이트','쿠사마 야요이 호박 조형물','치추미술관 등'],
      eat:['특산물은 딱히 없음'],
      note:'예술 특화 코스라 예술에 관심 없으면 후순위'
    },
    {
      id:'G', name:'야시마', mode:'rail',
      def:'숙소 근거리 야시마 코스',
      stops:[{lat:34.354, lng:134.108, label:'야시마지'},{lat:34.351, lng:134.104, label:'시코쿠무라 민가원'}],
      roundTrip:'왕복 30분 이내', roundTripMin:40,
      stayLabel:'관광 2~3시간', stayMin:150,
      see:['야시마지','시코쿠무라 민가원','전망대 등'],
      eat:['다카마쓰와 같음'],
      note:'근거리라 치고 빠지기 좋은 코스'
    },
    {
      id:'H', name:'메기지마·오기지마', mode:'ferry',
      def:'다카마쓰항에서 짧은 페리로 오가는 섬 코스',
      stops:[{lat:34.394, lng:134.050, label:'메기지마섬'},{lat:34.426, lng:134.060, label:'오기지마섬'}],
      roundTrip:'왕복 약 1시간 (메기지마 약 20분, 오기지마 약 40분)', roundTripMin:60,
      stayLabel:'관광 3~4시간 (두 섬 다 돌 경우)', stayMin:210,
      see:['메기지마 오니가시마 동굴','오기지마 고양이 섬 골목','세토우치 트리엔날레 상설 예술작품'],
      eat:['특산물은 딱히 없음'],
      note:'긴 일정은 아니지만 페리 배차 간격에 따라 변동 있음'
    }
  ]
};
