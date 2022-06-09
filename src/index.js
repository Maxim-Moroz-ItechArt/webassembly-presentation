import React from "react";
import ReactDOM from "react-dom";

import {
  FlexBox,
  Heading,
  SpectacleLogo,
  UnorderedList,
  CodeSpan,
  OrderedList,
  ListItem,
  FullScreen,
  Progress,
  Appear,
  Stepper,
  Slide,
  Deck,
  Text,
  Grid,
  Box,
  Image,
  CodePane,
  MarkdownSlide,
  MarkdownSlideSet,
  Notes,
} from "spectacle";

// SPECTACLE_CLI_THEME_START
const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
  },
};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

const SlideFragments = () => (
  <>
    <Slide>
      <Text>This is a slide fragment.</Text>
    </Slide>
    <Slide>
      <Text>This is also a slide fragment.</Text>
      <Appear>
        <Text>This item shows up!</Text>
      </Appear>
      <Appear>
        <Text>This item also shows up!</Text>
      </Appear>
    </Slide>
  </>
);

const Presentation = () => (
  <Deck theme={theme} template={template}>
    <Slide>
      <FlexBox height="100%">
        <Heading margin="0px" fontSize="150px">
          <i>✨Webassembly✨</i>{" "}
        </Heading>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Содержание</Heading>
      <UnorderedList>
        <ListItem>
          <CodeSpan>Что такое WASM</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>Для чего он нужен</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>Инфраструктура WASM</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>Программируем на WASM</CodeSpan>
        </ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Что такое WASM</Heading>
      <OrderedList>
        <Appear>
          <ListItem>Не только web</ListItem>
        </Appear>
        <Appear>
          <ListItem>Вообще не assembly</ListItem>
        </Appear>
      </OrderedList>
    </Slide>
    <Slide>
      <Appear>
        <FlexBox  padding={10}>
          <Image src="https://miro.medium.com/1*Od4DG1cwMw3AabVN5YLvNg.png" />
        </FlexBox>
      </Appear>
    </Slide>
    <Slide>
      <Heading>Инфраструктура WASM</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>
            Поддержка всех популярных статически типизированных языков{" "}
            <Appear>(AssemblyScript)</Appear>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>WASI (WASM с поддержкой I/O)</ListItem>
        </Appear>
        <Appear>
          <ListItem>Yew (React на Rust'е)</ListItem>
        </Appear>
        <Appear>
          <ListItem>WasmEdge Runtime (cloud native, serverless)</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Когда имеет смысл?</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>
            Сложная математика, нейронки в браузере{" "}
            <Appear>В принципе все, что связано с GPU</Appear>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>Перенос desktop приложений и игр в браузер</ListItem>
        </Appear>
        <Appear>
          <ListItem>Кроссплатформенность (пока-пока Electron 👋)</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Когда НЕ имеет смысл?</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>Обычный веб-интерфейс (WASM никак не заменит JS)</ListItem>
        </Appear>
        <Appear>
          <ListItem>Webworkers</ListItem>
        </Appear>
        <Appear>
          <ListItem>Дополнительный С++/Rust разработчик</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Кто уже использует?</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>Photoshop</ListItem>
        </Appear>
        <Appear>
          <ListItem>Yandex Maps</ListItem>
        </Appear>
        <Appear>
          <ListItem>Figma</ListItem>
        </Appear>
        <Appear>
          <ListItem>AutoCAD</ListItem>
        </Appear>
        <Appear>
          <ListItem>DOOM 3</ListItem>
        </Appear>
        <Appear>
          <ListItem>OpenCV</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading margin="0px" fontSize="120px">
        <i>Bright future ahead</i>{" "}
      </Heading>
    </Slide>
  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById("root"));
