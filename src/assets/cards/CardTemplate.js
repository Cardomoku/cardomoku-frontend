const cornerFontSize = 24;  // 좌상단, 우하단 숫자와 무늬 크기
const centerFontSize = 28;  // 중앙 무늬들의 크기
const aceFontSize = 64;     // A 카드 중앙 무늬 크기

// 숫자 카드 템플릿 (2-10)
const createNumberCardSVG = (suit, number, positions) => `
<svg width="169" height="244" viewBox="0 0 169 244" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- 카드 배경 -->
  <rect width="169" height="244" rx="12" fill="white" stroke="#E5E5E5"/>
  
  <!-- 좌상단 숫자와 무늬 -->
  <g transform="translate(15, 25)">
    <text font-family="Arial" font-size="${cornerFontSize}" fill="${suit === '♥' || suit === '♦' ? '#FF0000' : '#000000'}">${number}</text>
    <text font-family="Arial" font-size="${cornerFontSize}" y="20" fill="${suit === '♥' || suit === '♦' ? '#FF0000' : '#000000'}">${suit}</text>
  </g>
  
  <!-- 우하단 숫자와 무늬 (180도 회전) -->
  <g transform="translate(154, 219) rotate(180)">
    <text font-family="Arial" font-size="${cornerFontSize}" fill="${suit === '♥' || suit === '♦' ? '#FF0000' : '#000000'}">${number}</text>
    <text font-family="Arial" font-size="${cornerFontSize}" y="20" fill="${suit === '♥' || suit === '♦' ? '#FF0000' : '#000000'}">${suit}</text>
  </g>
  
  <!-- 중앙 무늬들 -->
  ${positions.map(pos => `
    <g transform="translate(${pos.x}, ${pos.y})">
      <text 
        font-family="Arial" 
        font-size="${centerFontSize}" 
        y="24" 
        fill="${suit === '♥' || suit === '♦' ? '#FF0000' : '#000000'}"
        text-anchor="middle"
        dominant-baseline="middle"
      >${suit}</text>
    </g>
  `).join('')}
</svg>
`;

// 문자 카드 템플릿 (J,Q,K)
const createFaceCardSVG = (suit, rank, isOneEyed = false) => `
<svg width="169" height="244" viewBox="0 0 169 244" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- 카드 배경 -->
  <rect width="169" height="244" rx="12" fill="white" stroke="#E5E5E5"/>
  
  <!-- 좌상단 숫자와 무늬 -->
  <g transform="translate(20, 30)">
    <text font-family="Arial" font-size="${cornerFontSize}" fill="${suit === '♥' || suit === '♦' ? '#FF0000' : '#000000'}">${rank}</text>
    <text font-family="Arial" font-size="${cornerFontSize}" y="20" fill="${suit === '♥' || suit === '♦' ? '#FF0000' : '#000000'}">${suit}</text>
  </g>
  
  <!-- 우하단 숫자와 무늬 (180도 회전) -->
  <g transform="translate(149, 214) rotate(180)">
    <text font-family="Arial" font-size="${cornerFontSize}" fill="${suit === '♥' || suit === '♦' ? '#FF0000' : '#000000'}">${rank}</text>
    <text font-family="Arial" font-size="${cornerFontSize}" y="20" fill="${suit === '♥' || suit === '♦' ? '#FF0000' : '#000000'}">${suit}</text>
  </g>
  
  <!-- 중앙 이미지 -->
  <g transform="translate(84.5, 122)">
    ${getFaceImage(rank, isOneEyed, suit === '♥' || suit === '♦')}
  </g>
</svg>
`;

// A 카드 템플릿
const createAceCardSVG = (suit) => `
<svg width="169" height="244" viewBox="0 0 169 244" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- 카드 배경 -->
  <rect width="169" height="244" rx="12" fill="white" stroke="#E5E5E5"/>
  
  <!-- 좌상단 숫자와 무늬 -->
  <g transform="translate(20, 30)">
    <text font-family="Arial" font-size="${cornerFontSize}" fill="${suit === '♥' || suit === '♦' ? '#FF0000' : '#000000'}">A</text>
    <text font-family="Arial" font-size="${cornerFontSize}" y="20" fill="${suit === '♥' || suit === '♦' ? '#FF0000' : '#000000'}">${suit}</text>
  </g>
  
  <!-- 우하단 숫자와 무늬 (180도 회전) -->
  <g transform="translate(149, 214) rotate(180)">
    <text font-family="Arial" font-size="${cornerFontSize}" fill="${suit === '♥' || suit === '♦' ? '#FF0000' : '#000000'}">A</text>
    <text font-family="Arial" font-size="${cornerFontSize}" y="20" fill="${suit === '♥' || suit === '♦' ? '#FF0000' : '#000000'}">${suit}</text>
  </g>
  
  <!-- 중앙 큰 무늬 -->
  <g transform="translate(84.5, 122)">
    <text font-family="Arial" font-size="${aceFontSize}" y="24" fill="${suit === '♥' || suit === '♦' ? '#FF0000' : '#000000'}" text-anchor="middle">${suit}</text>
  </g>
</svg>
`;

// O 카드 템플릿
const createOCardSVG = () => `
<svg width="169" height="244" viewBox="0 0 169 244" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- 카드 배경 -->
  <rect width="169" height="244" rx="12" fill="white" stroke="#E5E5E5"/>
  
  <!-- 중앙 검은 원 -->
  <circle cx="84.5" cy="122" r="40" stroke="#000000" stroke-width="8" fill="none"/>
</svg>
`;

// getFaceImage 함수 추가
const getFaceImage = (rank, isOneEyed, isRed) => {
  const color = isRed ? '#FF0000' : '#000000';
  const faceColor = '#FFE4B5';

  switch (rank) {
    case 'K':
      return `
        <!-- 왕관 -->
        <path d="M-20 -40 L20 -40 L15 -30 L10 -35 L0 -25 L-10 -35 L-15 -30 Z" fill="#FFD700"/>
        <!-- 얼굴 -->
        <circle cx="0" cy="-15" r="20" fill="${faceColor}"/>
        <!-- 눈 -->
        <circle cx="-8" cy="-18" r="2" fill="#000000"/>
        <circle cx="8" cy="-18" r="2" fill="#000000"/>
        <!-- 코 -->
        <path d="M0 -15 Q2 -12 0 -10" stroke="#000000" fill="none"/>
        <!-- 입 -->
        <path d="M-5 -5 Q0 -2 5 -5" stroke="#000000" fill="none"/>
        <!-- 옷깃 -->
        <path d="M-20 10 Q0 40 20 10" fill="#4169E1"/>
      `;
    case 'Q':
      return `
        <!-- 왕관 -->
        <path d="M-15 -40 L15 -40 L10 -30 L5 -35 L0 -25 L-5 -35 L-10 -30 Z" fill="#FFD700"/>
        <!-- 얼굴 -->
        <circle cx="0" cy="-15" r="18" fill="${faceColor}"/>
        <!-- 눈 -->
        <circle cx="-6" cy="-18" r="1.5" fill="#000000"/>
        <circle cx="6" cy="-18" r="1.5" fill="#000000"/>
        <!-- 코 -->
        <path d="M0 -15 Q1 -12 0 -10" stroke="#000000" fill="none"/>
        <!-- 입 -->
        <path d="M-4 -5 Q0 -2 4 -5" stroke="#000000" fill="none"/>
        <!-- 드레스 -->
        <path d="M-15 10 Q0 45 15 10" fill="#FF69B4"/>
      `;
    case 'J':
      return `
        <!-- 모자 -->
        <path d="M-15 -35 L15 -35 L20 -25 L-20 -25 Z" fill="#FF0000"/>
        <!-- 얼굴 -->
        <circle cx="0" cy="-15" r="16" fill="${faceColor}"/>
        <!-- 눈 -->
        ${isOneEyed ? 
          `<circle cx="6" cy="-18" r="1.5" fill="#000000"/>` :
          `<circle cx="-6" cy="-18" r="1.5" fill="#000000"/>
           <circle cx="6" cy="-18" r="1.5" fill="#000000"/>`
        }
        <!-- 코 -->
        <path d="M0 -15 Q1 -12 0 -10" stroke="#000000" fill="none"/>
        <!-- 입 -->
        <path d="M-4 -5 Q0 -3 4 -5" stroke="#000000" fill="none"/>
        <!-- 옷깃 -->
        <path d="M-15 10 Q0 35 15 10" fill="#000000"/>
      `;
    default:
      return '';
  }
};

// getNumberPositions 함수 수정 - 수평 중앙정렬을 위한 x 좌표 재조정
const getNumberPositions = (number) => {
  const centerX = 84.5;  // 카드의 정중앙 X좌표
  const spacing = 50;    // 좌우 열 사이의 간격

  // y좌표 기준점들을 5씩 더 아래로 이동
  const row1 = 47;   // 42 -> 47
  const row2 = 77;   // 72 -> 77
  const row3 = 107;  // 102 -> 107
  const row4 = 137;  // 132 -> 137

  switch (number) {
    case '2':
      return [
        { x: centerX, y: 47 },
        { x: centerX, y: 127 }
      ];
    case '3':
      return [
        { x: centerX, y: 47 },
        { x: centerX, y: 87 },
        { x: centerX, y: 127 }
      ];
    case '4':
      return [
        { x: centerX - spacing/2, y: 47 },
        { x: centerX + spacing/2, y: 47 },
        { x: centerX - spacing/2, y: 127 },
        { x: centerX + spacing/2, y: 127 }
      ];
    case '5':
      return [
        { x: centerX - spacing/2, y: 47 },
        { x: centerX + spacing/2, y: 47 },
        { x: centerX, y: 87 },
        { x: centerX - spacing/2, y: 127 },
        { x: centerX + spacing/2, y: 127 }
      ];
    case '6':
      return [
        { x: centerX - spacing/2, y: 47 },
        { x: centerX + spacing/2, y: 47 },
        { x: centerX - spacing/2, y: 87 },
        { x: centerX + spacing/2, y: 87 },
        { x: centerX - spacing/2, y: 127 },
        { x: centerX + spacing/2, y: 127 }
      ];
    case '7':
      return [
        { x: centerX - spacing/2, y: 47 },
        { x: centerX + spacing/2, y: 47 },
        { x: centerX - spacing/2, y: 87 },
        { x: centerX, y: 87 },
        { x: centerX + spacing/2, y: 87 },
        { x: centerX - spacing/2, y: 127 },
        { x: centerX + spacing/2, y: 127 }
      ];
    case '8':
      return [
        { x: centerX - spacing/2, y: row1 },
        { x: centerX + spacing/2, y: row1 },
        { x: centerX - spacing/2, y: row2 },
        { x: centerX + spacing/2, y: row2 },
        { x: centerX - spacing/2, y: row3 },
        { x: centerX + spacing/2, y: row3 },
        { x: centerX - spacing/2, y: row4 },
        { x: centerX + spacing/2, y: row4 }
      ];
    case '9':
      return [
        { x: centerX - spacing/2, y: row1 },
        { x: centerX + spacing/2, y: row1 },
        { x: centerX - spacing/2, y: row2 },
        { x: centerX, y: row2 },
        { x: centerX + spacing/2, y: row2 },
        { x: centerX - spacing/2, y: row3 },
        { x: centerX + spacing/2, y: row3 },
        { x: centerX - spacing/2, y: row4 },
        { x: centerX + spacing/2, y: row4 }
      ];
    case '10':
      return [
        { x: centerX - spacing/2, y: row1 },
        { x: centerX + spacing/2, y: row1 },
        { x: centerX - spacing/2, y: row2 },
        { x: centerX, y: row2 },
        { x: centerX + spacing/2, y: row2 },
        { x: centerX - spacing/2, y: row3 },
        { x: centerX, y: row3 },
        { x: centerX + spacing/2, y: row3 },
        { x: centerX - spacing/2, y: row4 },
        { x: centerX + spacing/2, y: row4 }
      ];
    default:
      return [];
  }
};

module.exports = { createNumberCardSVG, createFaceCardSVG, createAceCardSVG, createOCardSVG, getNumberPositions }; 