import { useEffect, useRef, useState } from 'react';
import {
  AppShell,
  Image,
  Grid,
  Group,
  Title,
  Button,
  Text,
  Card,
  Stack,
  Badge,
  Box,
  Progress,
  ScrollArea,
  Tooltip,
} from '@mantine/core';

const pages = [
  {
    badge: '1',
    title: '양자는 왜 낯설까?',
    image: 'https://news.samsungdisplay.com/wp-content/uploads/2019/01/sdfsdfsdafasdf.png',
    body: [
      '우리가 평소에 보는 세상은 비교적 분명하다. 공은 책상 위에 있거나 바닥에 있고, 문은 열려 있거나 닫혀 있다. 사람도 교실 안에 있거나 밖에 있다. 이런 일상적인 세계에서는 물체의 위치와 상태를 직접 눈으로 확인할 수 있다.',
      '하지만 양자의 세계는 우리가 직접 보는 세계보다 훨씬 작다. 양자는 원자, 전자, 빛처럼 아주 작은 세계에서 나타나는 성질과 관련이 있다. 이 세계는 너무 작아서 눈으로 볼 수 없고, 손으로 만질 수도 없다. 그래서 우리는 실험 장치와 수학적 설명을 통해서만 양자의 성질을 이해할 수 있다.',
      '양자가 낯설게 느껴지는 이유는 단순히 작기 때문만은 아니다. 양자의 세계에서는 우리가 평소에 당연하다고 생각하는 규칙이 그대로 적용되지 않는다. 예를 들어 일상에서는 하나의 물체가 한 장소에 있다고 생각하지만, 양자 세계에서는 측정하기 전까지 여러 가능성이 함께 있는 것처럼 설명되는 경우가 있다.',
      '이런 점 때문에 양자는 처음 들으면 이상하고 어렵게 느껴진다. 하지만 양자가 이상하다고 해서 현실과 상관없는 개념은 아니다. 오히려 양자는 현대 과학기술의 바탕이 되는 중요한 개념이다. 우리가 사용하는 스마트폰, 컴퓨터, LED, 레이저 같은 기술도 아주 작은 입자의 성질을 이해했기 때문에 가능해졌다.',
      '따라서 양자를 배운다는 것은 단순히 어려운 과학 용어를 외우는 것이 아니다. 우리가 직접 볼 수 없는 작은 세계가 어떻게 움직이고, 그 원리가 어떻게 현대 기술로 이어지는지를 이해하는 과정이다.',
    ],
    key: '양자는 눈에 보이지 않는 아주 작은 세계의 특별한 규칙을 설명하는 개념이다.',
  },
  {
    badge: '2',
    title: '양자란 무엇일까?',
    image: 'https://news.samsungdisplay.com/wp-content/uploads/2019/01/sdfsdfsdafasdf.png',
    body: [
      '양자란 아주 작은 세계에서 에너지나 물질의 성질이 일정한 단위로 나타나는 것을 설명하는 개념이다. 쉽게 말하면, 자연의 작은 세계에서는 에너지가 아무 값으로나 부드럽게 변하는 것이 아니라 정해진 단위처럼 나타날 때가 있다.',
      '계단을 떠올리면 이해하기 쉽다. 미끄럼틀은 위에서 아래로 부드럽게 내려올 수 있다. 중간 어디쯤에도 있을 수 있다. 하지만 계단은 다르다. 1칸, 2칸, 3칸처럼 정해진 칸을 밟아야 한다. 양자의 세계에서도 에너지가 계단처럼 특정한 값으로 나타나는 경우가 있다.',
      '옛날 과학자들은 에너지가 물처럼 연속적으로 변한다고 생각했다. 하지만 아주 작은 세계를 연구해 보니, 빛이나 원자에서 에너지가 작은 덩어리처럼 주고받아지는 현상이 나타났다. 이 작은 단위와 관련된 생각이 양자 개념의 출발점이다.',
      '양자라는 말은 어렵게 느껴지지만, 핵심은 “아주 작은 세계에서는 에너지와 물질이 우리가 생각한 것과 다른 규칙을 따른다”는 것이다. 이 규칙을 설명하는 과학 이론이 양자역학이다.',
      '양자역학은 원자, 전자, 빛의 움직임을 설명한다. 이런 것들은 너무 작아서 일상적인 경험만으로는 이해하기 어렵다. 그래서 양자역학에서는 중첩, 측정, 얽힘 같은 새로운 개념이 등장한다.',
    ],
    key: '양자는 작은 세계에서 에너지와 물질이 어떤 규칙을 따라 나타나는지를 설명하는 개념이다.',
  },
  {
    badge: '3',
    title: '중첩',
    image: 'https://static.wikia.nocookie.net/supernaturalpowers/images/2/2a/%EC%96%91%EC%9E%90_%EC%A4%91%EC%B2%A9%EC%9D%84_%ED%91%9C%ED%98%84%ED%95%9C_%EA%B7%B8%EB%A6%BC.png/revision/latest/scale-to-width-down/360?cb=20210531115812&path-prefix=ko',
    body: [
      '중첩은 양자 세계에서 어떤 상태가 하나로 정해지기 전까지 여러 가능성이 함께 있는 것처럼 설명되는 현상이다. 일상에서는 대부분의 물체가 하나의 상태를 가진다. 전등은 켜져 있거나 꺼져 있고, 동전은 앞면이거나 뒷면이다.',
      '하지만 양자 세계에서는 측정하기 전까지 하나의 결과로 딱 정해졌다고 말하기 어려운 경우가 있다. 예를 들어 동전이 빠르게 돌아가고 있을 때를 생각해 보자. 바닥에 떨어지기 전에는 앞면인지 뒷면인지 확실히 말하기 어렵다. 중첩을 처음 설명할 때는 이런 느낌을 이용할 수 있다.',
      '다만 동전 비유에는 한계가 있다. 돌아가는 동전은 사실 어느 순간에도 물리적으로는 정해진 상태를 가지고 있다. 우리가 빠르게 움직이기 때문에 잘 모를 뿐이다. 하지만 양자 중첩은 단순히 “우리가 모르는 상태”와는 다르다. 양자 자체가 여러 가능성을 가진 상태로 계산된다는 점이 중요하다.',
      '양자컴퓨터는 이 중첩 개념을 이용한다. 일반 컴퓨터의 비트는 0 또는 1 중 하나의 값만 가진다. 하지만 양자컴퓨터의 큐비트는 0과 1의 가능성을 함께 다룰 수 있다. 그래서 특정한 계산에서는 기존 컴퓨터와 다른 방식으로 문제를 풀 수 있다.',
      '중첩을 이해할 때 가장 중요한 것은 “양자가 마법처럼 아무렇게나 변한다”가 아니다. 양자 세계에서는 결과가 나오기 전까지 여러 가능성을 수학적으로 함께 다룬다는 점이다.',
    ],
    key: '중첩은 양자가 하나의 결과로 정해지기 전 여러 가능성을 함께 가진 것처럼 행동하는 현상이다.',
  },
  {
    badge: '4',
    title: '측정',
    image: 'https://news.samsungdisplay.com/wp-content/uploads/2019/01/sdfsdfsdafasdf.png',
    body: [
      '양자 세계에서는 측정이 매우 중요하다. 측정하기 전에는 여러 가능성이 함께 있는 것처럼 설명되지만, 측정하는 순간 하나의 결과가 나타난다. 이 점은 양자역학을 어렵게 만드는 동시에 매우 특별하게 만드는 부분이다.',
      '상자 안에 공이 있다고 생각해 보자. 상자를 열기 전에는 공이 왼쪽에 있는지 오른쪽에 있는지 모른다. 상자를 열면 우리는 공의 위치를 확인할 수 있다. 일상적인 세계에서는 이것이 단순히 “몰랐던 것을 알게 되는 과정”이다.',
      '하지만 양자 세계에서는 이야기가 조금 더 복잡하다. 아주 작은 입자는 측정하는 행위 자체가 상태에 영향을 줄 수 있다. 즉, 측정은 단순히 숨어 있던 답을 확인하는 것만이 아니라, 여러 가능성 중 하나의 결과가 드러나는 중요한 과정이다.',
      '이 때문에 양자역학에서는 “관측한다”는 말이 특별한 의미를 가진다. 그냥 눈으로 본다는 뜻이 아니라, 양자의 상태를 확인할 수 있는 실험적 상호작용이 일어난다는 뜻에 가깝다.',
      '측정 개념은 양자컴퓨터에서도 중요하다. 양자컴퓨터는 계산 과정에서 중첩과 얽힘을 이용하지만, 마지막에는 측정을 통해 결과를 얻어야 한다. 따라서 양자컴퓨터의 계산은 가능성을 다루는 과정과 결과를 읽어내는 과정이 함께 필요하다.',
    ],
    key: '양자 세계에서 측정은 여러 가능성 중 하나의 결과가 나타나게 하는 중요한 과정이다.',
  },
  {
    badge: '5',
    title: '얽힘',
    image: 'https://news.samsungdisplay.com/wp-content/uploads/2019/01/sdfsdfsdafasdf.png',
    body: [
      '얽힘은 두 양자가 서로 떨어져 있어도 하나의 연결된 상태처럼 행동하는 현상이다. 두 입자가 멀리 떨어져 있어도, 한쪽의 상태를 알면 다른 쪽의 상태와 관련된 정보를 알 수 있는 것처럼 나타난다.',
      '처음에는 짝이 맞는 장갑을 생각하면 조금 이해하기 쉽다. 상자 두 개에 왼손 장갑과 오른손 장갑을 하나씩 넣고 멀리 보냈다고 하자. 한 상자를 열었을 때 왼손 장갑이 나오면, 다른 상자에는 오른손 장갑이 있다는 것을 알 수 있다.',
      '하지만 실제 양자 얽힘은 장갑보다 더 특별하다. 장갑은 처음부터 왼손, 오른손이 정해져 있다. 우리는 그 사실을 몰랐을 뿐이다. 그런데 양자 얽힘은 단순히 정해진 정보를 나눠 가진 것과는 다르게, 두 양자의 상태가 하나의 관계로 묶여 있는 것처럼 설명된다.',
      '얽힘은 양자컴퓨터에서 중요한 역할을 한다. 여러 큐비트가 얽히면 각각의 큐비트를 따로 보는 것보다 훨씬 복잡한 관계를 만들 수 있다. 이 관계를 잘 이용하면 특정한 문제를 기존 컴퓨터와 다른 방식으로 계산할 수 있다.',
      '다만 얽힘을 이용한다고 해서 정보를 빛보다 빠르게 보낼 수 있는 것은 아니다. 얽힘은 매우 신기한 현상이지만, 영화처럼 순간이동 통신을 가능하게 하는 마법은 아니다. 과학적으로는 매우 정확한 규칙 안에서 이해해야 한다.',
    ],
    key: '얽힘은 떨어져 있는 양자들이 서로 강하게 연결된 상태처럼 행동하는 현상이다.',
  },
  {
    badge: '6',
    title: '양자와 현대 과학',
    image: 'https://news.samsungdisplay.com/wp-content/uploads/2019/01/sdfsdfsdafasdf.png',
    body: [
      '양자는 어렵고 낯설지만, 현대 과학기술을 이해하는 데 매우 중요하다. 우리가 직접 양자를 볼 수는 없지만, 양자역학은 이미 많은 기술의 바탕이 되고 있다.',
      '스마트폰과 컴퓨터에 들어가는 반도체는 전자의 움직임을 이해해야 만들 수 있다. 전자는 아주 작은 입자이고, 그 움직임은 양자역학과 깊게 관련되어 있다. 반도체가 발전했기 때문에 오늘날의 컴퓨터와 스마트폰도 가능해졌다.',
      'LED와 레이저도 양자 개념과 연결된다. LED는 전자가 에너지 상태를 바꾸면서 빛을 내는 원리를 이용한다. 레이저는 빛과 원자의 성질을 정교하게 이용한 기술이다. 우리가 사용하는 바코드 스캐너, 광통신, 의료 장비에도 이런 원리가 들어간다.',
      '병원에서 사용하는 MRI도 양자와 관련이 있다. MRI는 우리 몸속 원자핵의 성질을 이용해 몸 안을 촬영하는 기술이다. 즉, 양자는 실험실 안에만 있는 개념이 아니라 실제 의료 기술에도 연결되어 있다.',
      '따라서 양자는 “어려운 과학자들의 이야기”가 아니다. 우리가 매일 사용하는 전자기기, 병원의 검사 장비, 통신 기술, 미래의 양자컴퓨터까지 이어지는 현대 과학의 중요한 기반이다.',
    ],
    key: '양자는 직접 보이지 않지만, 현대 기술을 가능하게 만든 중요한 과학 원리다.',
  },
  {
    badge: '7',
    title: '양자컴퓨터란 무엇일까?',
    image: 'https://news.samsungdisplay.com/wp-content/uploads/2019/01/sdfsdfsdafasdf.png',
    body: [
      '양자컴퓨터는 양자의 성질을 계산에 이용하는 새로운 방식의 컴퓨터다. 일반 컴퓨터는 정보를 0 또는 1로 처리한다. 이것을 비트라고 한다. 전등 스위치가 꺼짐 또는 켜짐 중 하나인 것과 비슷하다.',
      '양자컴퓨터는 큐비트라는 단위를 사용한다. 큐비트는 중첩을 이용해 0과 1의 가능성을 함께 다룰 수 있다. 또한 여러 큐비트가 얽힘을 이루면, 기존 컴퓨터와는 다른 방식으로 계산을 진행할 수 있다.',
      '이 말은 양자컴퓨터가 모든 계산을 무조건 빠르게 한다는 뜻은 아니다. 많은 사람들이 양자컴퓨터를 “엄청 빠른 미래 컴퓨터”라고만 생각하지만, 실제로는 특정한 종류의 문제에서 강점을 가질 수 있는 컴퓨터라고 보는 것이 더 정확하다.',
      '예를 들어 자연 속 분자나 원자처럼 양자 규칙을 따르는 대상을 계산할 때 양자컴퓨터가 도움이 될 수 있다. 왜냐하면 양자컴퓨터 자체가 양자 원리를 이용하기 때문이다. 양자 세계를 일반 컴퓨터로 흉내 내는 것보다, 양자 원리를 쓰는 컴퓨터로 다루는 것이 더 효율적일 수 있다.',
      '그래서 양자컴퓨터는 게임을 더 빠르게 실행하거나 영상을 더 빨리 보기 위한 컴퓨터라기보다는, 과학 연구와 복잡한 계산 문제를 해결하기 위한 특별한 도구에 가깝다.',
    ],
    key: '양자컴퓨터는 중첩과 얽힘 같은 양자의 성질을 계산에 활용하는 컴퓨터다.',
  },
  {
    badge: '8',
    title: '양자컴퓨터는 어디에 쓰일까?',
    image: 'https://news.samsungdisplay.com/wp-content/uploads/2019/01/sdfsdfsdafasdf.png',
    body: [
      '양자컴퓨터는 아직 발전 중인 기술이지만, 미래에 여러 분야에서 활용될 가능성이 있다. 특히 경우의 수가 너무 많거나, 아주 작은 자연 현상을 계산해야 하는 문제에서 기대를 받고 있다.',
      '첫 번째 활용 분야는 신약 개발이다. 새로운 약을 만들려면 분자의 구조와 반응을 이해해야 한다. 그런데 분자 자체가 양자의 규칙을 따르기 때문에, 양자컴퓨터가 이런 계산을 더 잘할 수 있을 것으로 기대된다. 이것이 가능해지면 약을 찾는 과정이 더 효율적이 될 수 있다.',
      '두 번째는 신소재 연구다. 더 좋은 배터리, 더 빠른 반도체, 더 효율적인 촉매를 만들려면 물질 내부에서 전자와 원자가 어떻게 움직이는지 알아야 한다. 이런 문제도 양자역학과 관련이 깊다.',
      '세 번째는 암호와 보안이다. 현재 인터넷 보안에는 큰 수를 소인수분해하기 어렵다는 점을 이용한 암호가 있다. 그런데 충분히 강력한 양자컴퓨터가 만들어지면 일부 암호 방식이 위험해질 수 있다. 그래서 양자컴퓨터에도 안전한 새로운 암호 기술을 연구하고 있다.',
      '네 번째는 복잡한 최적화 문제다. 물류, 금융, 교통처럼 가능한 선택지가 매우 많은 문제에서 더 좋은 답을 찾는 데 활용될 가능성이 있다. 다만 이 분야들은 아직 연구가 더 필요한 부분도 많다.',
    ],
    key: '양자컴퓨터는 신약, 신소재, 암호, 보안, 복잡한 계산 문제와 연결될 수 있다.',
  },
  {
    badge: '9',
    title: '아직 해결해야 할 점',
    image: 'https://news.samsungdisplay.com/wp-content/uploads/2019/01/sdfsdfsdafasdf.png',
    body: [
      '양자컴퓨터는 가능성이 큰 기술이지만 아직 완성된 기술은 아니다. 양자 상태는 매우 예민해서 주변 환경의 작은 영향만 받아도 쉽게 흐트러질 수 있다.',
      '아주 예민한 악기를 떠올리면 이해하기 쉽다. 바이올린은 줄이 조금만 틀어져도 소리가 이상해진다. 양자컴퓨터도 비슷하게, 큐비트가 안정적으로 유지되지 않으면 계산 결과에 오류가 생길 수 있다.',
      '그래서 양자컴퓨터를 만들 때는 오류를 줄이는 기술이 중요하다. 큐비트가 많아질수록 계산할 수 있는 힘은 커질 수 있지만, 동시에 오류를 관리하기도 어려워진다. 많은 연구자들이 이 문제를 해결하기 위해 양자 오류 정정 기술을 연구하고 있다.',
      '또 다른 문제는 실제로 쓸 수 있는 양자컴퓨터를 만드는 것이다. 실험실에서 작은 규모로 작동하는 것과, 현실의 문제를 안정적으로 해결하는 것은 다르다. 그래서 양자컴퓨터는 기대가 큰 기술이지만 아직 연구와 개발이 더 필요하다.',
      '결국 양자컴퓨터를 볼 때는 기대와 한계를 함께 봐야 한다. 양자컴퓨터는 미래에 중요한 역할을 할 수 있지만, 지금 당장 모든 컴퓨터를 대체하는 만능 기술은 아니다.',
    ],
    key: '양자컴퓨터는 미래 가능성이 크지만, 안정성과 오류 문제를 해결해야 한다.',
  },
];

function App() {
  const [pageIndex, setPageIndex] = useState(0);
  const [canGoNext, setCanGoNext] = useState(false);
  const viewportRef = useRef<HTMLDivElement | null>(null);

  const page = pages[pageIndex];
  const isLastPage = pageIndex === pages.length - 1;

  const checkScrollBottom = () => {
    const viewport = viewportRef.current;

    if (!viewport) return;

    const scrollTop = viewport.scrollTop;
    const clientHeight = viewport.clientHeight;
    const scrollHeight = viewport.scrollHeight;

    const isBottom = scrollTop + clientHeight >= scrollHeight - 16;

    setCanGoNext(isBottom);
  };

  const nextPage = () => {
    if (!canGoNext || isLastPage) return;

    setPageIndex((current) => Math.min(current + 1, pages.length - 1));
  };

  const prevPage = () => {
    setPageIndex((current) => Math.max(current - 1, 0));
  };

  useEffect(() => {
    const viewport = viewportRef.current;

    if (viewport) {
      viewport.scrollTo({ top: 0 });
    }

    setCanGoNext(false);

    setTimeout(() => {
      const currentViewport = viewportRef.current;

      if (!currentViewport) return;

      const isNotScrollable =
        currentViewport.scrollHeight <= currentViewport.clientHeight + 4;

      if (isNotScrollable) {
        setCanGoNext(true);
      }
    }, 0);
  }, [pageIndex]);

  return (
    <AppShell header={{ height: 60 }}>
      <AppShell.Header>
        <Group h="100%" px="xl" justify="space-between">
          <Title order={3}>Introduce Quantum</Title>

          <Group gap="xs">
            <Button variant="subtle">Home</Button>
            <Button variant="light">Quantum</Button>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Main>
        <Box
          p="md"
          style={{
            minHeight: 'calc(100vh - 60px)',
            background:
              'linear-gradient(135deg, #f4f7ff 0%, #ffffff 55%, #eef8ff 100%)',
          }}
        >
          <Grid gap="md" align="stretch">
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Card
                shadow="md"
                radius="lg"
                p={0}
                h="calc(100vh - 92px)"
                style={{
                  overflow: 'hidden',
                  border: '1px solid rgba(80, 100, 180, 0.15)',
                }}
              >
                <Box pos="relative" h="100%">
                  <Image
                    h="100%"
                    fit="cover"
                    src={page.image}
                    alt="Quantum image"
                  />

                  <Box
                    pos="absolute"
                    bottom={0}
                    left={0}
                    right={0}
                    p="lg"
                    style={{
                      background:
                        'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.72) 100%)',
                      color: 'white',
                    }}
                  >
                    <Badge color="cyan" variant="filled">
                      Quantum
                    </Badge>

                    <Title order={2} mt="xs">
                      작은 세계의 규칙
                    </Title>

                    <Text mt={6} size="sm" opacity={0.9}>
                      양자는 보이지 않지만 현대 과학기술의 바탕이 된다.
                    </Text>
                  </Box>
                </Box>
              </Card>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 8 }}>
              <Card
                shadow="md"
                radius="lg"
                p="lg"
                h="calc(100vh - 92px)"
                style={{
                  border: '1px solid rgba(80, 100, 180, 0.15)',
                  background: 'rgba(255, 255, 255, 0.96)',
                }}
              >
                <Stack h="100%" gap="sm">
                  <Box>
                    <Group justify="space-between" align="center">
                      <Badge
                        size="lg"
                        variant="gradient"
                        gradient={{ from: 'indigo', to: 'cyan' }}
                      >
                        Page {page.badge}
                      </Badge>

                      <Text size="sm" c="dimmed">
                        {pageIndex + 1} / {pages.length}
                      </Text>
                    </Group>

                    <Progress
                      value={((pageIndex + 1) / pages.length) * 100}
                      mt="sm"
                      radius="xl"
                      size="xs"
                    />

                    <Title order={1} mt="lg" mb="sm">
                      {page.title}
                    </Title>
                  </Box>

                  <ScrollArea
                    viewportRef={viewportRef}
                    onScrollPositionChange={checkScrollBottom}
                    offsetScrollbars
                    scrollbarSize={8}
                    h="calc(100vh - 315px)"
                    type="always"
                  >
                    <Stack gap="md" pr="md">
                      {page.body.map((paragraph, index) => (
                        <Text key={index} size="lg" lh={1.85}>
                          {paragraph}
                        </Text>
                      ))}

                      <Card
                        mt="xs"
                        radius="md"
                        p="md"
                        style={{
                          background:
                            'linear-gradient(135deg, rgba(67, 97, 238, 0.08), rgba(76, 201, 240, 0.13))',
                          border: '1px solid rgba(67, 97, 238, 0.15)',
                        }}
                      >
                        <Text fw={700} size="sm" c="indigo" mb={4}>
                          핵심 정리
                        </Text>

                        <Text size="lg" fw={600} lh={1.6}>
                          {page.key}
                        </Text>
                      </Card>

                      <Text ta="center" size="sm" c="dimmed" mt="xs">
                        끝까지 읽었습니다.
                      </Text>
                    </Stack>
                  </ScrollArea>

                  <Group justify="space-between" mt="xs">
                    <Button
                      variant="light"
                      onClick={prevPage}
                      disabled={pageIndex === 0}
                    >
                      이전
                    </Button>

                    <Group gap={5}>
                      {pages.map((_, index) => (
                        <Box
                          key={index}
                          onClick={() => setPageIndex(index)}
                          style={{
                            width: index === pageIndex ? 24 : 8,
                            height: 8,
                            borderRadius: 999,
                            cursor: 'pointer',
                            background:
                              index === pageIndex
                                ? 'linear-gradient(90deg, #4c6ef5, #15aabf)'
                                : '#d8deeb',
                            transition: '0.2s',
                          }}
                        />
                      ))}
                    </Group>

                    {isLastPage ? (
                      <Button disabled={!canGoNext}>
                        완료
                      </Button>
                    ) : (
                      <Tooltip label="스크롤을 끝까지 내리세요">
                        <Button
                          onClick={nextPage}
                          disabled={!canGoNext}
                        >
                          다음
                        </Button>
                      </Tooltip>
                    )}
                  </Group>
                </Stack>
              </Card>
            </Grid.Col>
          </Grid>
        </Box>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;