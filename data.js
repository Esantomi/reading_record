// data.js
const LITERARY_DATA = {
  // 1. 모든 개체(문인, 도서 등)의 상세 프로필 및 설명
  nodes: {
    "writer_yi_sang": {
      id: "writer_yi_sang",
      name: "이상 (李箱)",
      type: "WRITER",
      description: "1910년 출생. 한국 근대 문학의 대표적인 모더니즘 작가이자 시인. 대표작으로 오감도, 날개 등이 있으며 서구의 모더니즘 문학과 자연과학 이론에 깊은 관심을 가짐."
    },
    "writer_kim_yu_jeong": {
      id: "writer_kim_yu_jeong",
      name: "김유정 (金裕貞)",
      type: "WRITER",
      description: "1908년 출생. 소설가. 한국의 향토적인 정서와 해학을 바탕으로 한 독창적인 단편소설들을 남김. 대표작으로 동백꽃, 봄·봄 등이 있음."
    },
    "book_science_text": {
      id: "book_science_text",
      name: "상대성원리 해설",
      type: "BOOK",
      description: "당대 지식인 사회에 충격을 주었던 자연과학 대중서. 이상의 시적 자의식과 아인슈타인 물리학의 연관성을 보여주는 핵심 텍스트."
    },
    "book_madame_bovary": {
      id: "book_madame_bovary",
      name: "마담 보바리",
      type: "BOOK",
      description: "귀스타브 플로베르의 장편 소설. 근대적 문학 감수성과 리얼리즘의 극치를 보여주는 세계적 명작."
    }
  },
  
  // 2. 개체들 간의 연결 관계 (독서 이력, 교유 관계 등)
  edges: [
    { from: "writer_yi_sang", to: "book_science_text", label: "READ", source: "이상 일기" },
    { from: "writer_yi_sang", to: "book_madame_bovary", label: "READ", source: "구인회 회고록" },
    { from: "writer_kim_yu_jeong", to: "book_madame_bovary", label: "READ", source: "수필 '보바리 부인에 대하여'" },
    { from: "writer_yi_sang", to: "writer_kim_yu_jeong", label: "FRIENDSHIP", source: "문단 야사" }
  ]
};