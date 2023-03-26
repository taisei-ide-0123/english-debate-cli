# English-Debate-CLI

## Table of Contents

<details>
  <summary>Table of Contents</summary>
  <ul>
    <li><a href="#english-version">English Version</a></li>
    <ul>
      <li><a href="#about-the-project">About The Project</a></li>
      <li><a href="#built-with">Built With</a></li>
      <li>
        <a href="#getting-started">Getting Started</a>
        <ul>
          <li><a href="#prerequisites">Prerequisites</a></li>
          <li><a href="#installation">Installation</a></li>
        </ul>
      </li>
      <li><a href="#usage">Usage</a></li>
      <li><a href="#example">Example</a></li>
    </ul>
    <li><a href="#日本語版">日本語版</a></li>
    <ul>
      <li><a href="#プロジェクトについて">プロジェクトについて</a></li>
      <li><a href="#使用技術">使用技術</a></li>
      <li>
        <a href="#このプロジェクトを使用するにあたって">このプロジェクトを使用するにあたって</a>
        <ul>
          <li><a href="#必要なもの">必要なもの</a></li>
          <li><a href="#インストール">インストール</a></li>
        </ul>
      </li>
      <li><a href="#使い方">使い方</a></li>
      <li><a href="#例">例</a></li>
    </ul>
  </ul>
</details>

## English Version

### About The Project

This project is a command-line interface tool that can review the user's English grammar and provide example sentences for the user's input on a given topic. It can help English learners to improve their writing and speaking skills.

### Build with

- Node.js
- TypeScript
- OpenAI API

### Getting Started

These instructions will get you a copy of the project up and running on your local machine.

#### Prerequisites

Before you start, you need to have the following:
Node.js installed on your machine. You can download it from https://nodejs.org/.
An API key for the OpenAI API. You can get one from https://platform.openai.com/account/api-keys.

#### Installation

1. Clone the repository:

```
git clone git@github.com:taisei-ide-0123/english-debate-cli.git
```

2. Install dependencies:

```
cd english-debate-cli
npm install
```

3. Set up environment variables:

```
cp .env.sample .env
```

Edit the .env file and replace OPENAI_API_KEY with your own API key.

### Usage

1. Start the application:

```
npm start
```

2. Follow the prompts to enter the topic and your opinion.

3. Wait for the grammar correction, feedback, and example sentences to be output.

### Example

Here is an example of how the tool works.

```

----------------------------------------------------------------------------------------------------

I'm happy to engage in a debate with you.

----------------------------------------------------------------------------------------------------

Provide the topic you would like to discuss.

----------------------------------------------------------------------------------------------------

the use of nuclear in Japan

----------------------------------------------------------------------------------------------------

Provide your opinion for the use of nuclear in Japan

----------------------------------------------------------------------------------------------------

That’s a hard question to answer as a Japanese.

I’d say I’m for and against using nuclear power.

I will start by stating my approval.

Nuclear power is a reliable source of electricity that can meet Japan’s high demand for energy. Japan is heavily reliant on imports for energy, and nuclear power provides a domestic source of energy that can reduce the country’s dependence on imports.

Nuclear power is a low-carbon energy source that can help Japan reduce its green gas emissions and meet its climate change goals.

Japan has made significant improvements to its nuclear safety regulations and practices and practices since the Fukushima disaster in 2011 so it can be a safe and effective energy resource.

But Japan has the most earthquakes and there is a risk that earthquakes and tsunamis could damage nuclear power plants and cause a disaster.

In conclusion, whether or not Japan should stop using nuclear power is a complex issue with arguments for and against it.That’s a hard question to answer as a Japanese.

----------------------------------------------------------------------------------------------------

Reviewing your opinion ...

On the one hand, Japan has experienced the devastating consequences of nuclear power through the Fukushima disaster in 2011, which caused massive damage to the environment, health problems for many Japanese citizens, and displacement of thousands. It is hard to forget the pain and trauma that it caused to the people of Japan. Hence, it's natural for some to argue that Japan should not use nuclear power again.

However, on the other hand, Japan is an island nation with limited resources and a high population density, putting pressure on energy supply. Currently, Japan is heavily reliant on fossil fuels for its energy needs, which not only contributes to climate change but has also led to Japan's trade deficit as it has to import most of its oil and gas. Nuclear energy may provide a viable alternative to these resources with its clean, reliable, and abundant energy.

Furthermore, Japan has some of the most technologically advanced and safe nuclear reactor designs. Hence, Japan has the capability of developing a safe nuclear program that could minimize the risk of future accidents. Thus, nuclear power could be a pragmatic solution to the challenges Japan is facing.

In conclusion, while the risks of nuclear power cannot be ignored, Japan could weigh its options carefully and incorporate viable safety measures while utilizing nuclear power. Japan has been the victim of the deadliest nuclear accident to date, and thus, it could become a leader of safe and sustainable nuclear power.

----------------------------------------------------------------------------------------------------

Requesting the grammar review ...

----------------------------------------------------------------------------------------------------

There are no grammatical errors in your opinion. However, it is a single sentence and lacks depth and context necessary for a debate. In a debate, it is important to provide supporting evidence and arguments to present a strong case for your opinion. You may consider expanding your opinion to include specific reasons behind your stance on the use of nuclear in Japan.

----------------------------------------------------------------------------------------------------

Requesting examples of arguments from both perspectives, supporting and opposing the use of nuclear in Japan ...

----------------------------------------------------------------------------------------------------

Sure, here are some examples:

Supporting arguments:
- Nuclear power is a reliable and efficient source of energy, providing a significant amount of Japan's energy needs.
- Japan lacks natural resources and heavily relies on imported fossil fuels, making nuclear power a key option for energy independence.
- Newer nuclear technologies offer improved safety features and waste management techniques, making it safer and more sustainable than before.
- Nuclear power plants provide local jobs and support local economies.

Opposing arguments:
- The Fukushima Daiichi nuclear disaster in 2011 demonstrated the risks and potential consequences of nuclear energy, with long-term health and environmental effects that are still being addressed.
- The improper handling and disposal of radioactive waste poses a significant risk to public health and safety.
- Japan is geographically located in an area of high seismic activity, making it particularly vulnerable to natural disasters that could cause nuclear accidents.
- The development of renewable energy sources such as solar, wind, and hydro power provide alternative, sustainable options for energy without the risks associated with nuclear power.
It was nice talking with you! See you later!

```

## 日本語版

### プロジェクトについて

このプロジェクトは、ユーザーの英文法を確認し、指定されたトピックに対するユーザーの入力に対する例文を提供する、コマンドラインインターフェースツールです。英語学習者がライティングスキルやスピーキングスキルを向上させるのに役立ちます。

### 使用技術

Node.js
TypeScript
OpenAI API

### このプロジェクトを使用するにあたって

これらの手順に従って、プロジェクトをローカル環境で実行することができます。

#### 必要なもの

開始する前に、以下の準備が必要です：
マシンにインストールされた Node.js。https://nodejs.org/からダウンロードできます。
OpenAI API の API キー。https://platform.openai.com/account/api-keysから取得できます。

#### インストール

1. リポジトリのクローン:

```
git clone git@github.com:taisei-ide-0123/english-debate-cli.git
```

2. 依存関係のインストール:

```
cd english-debate-cli
npm install
```

3. 環境変数の設定:

```
cp .env.sample .env
```

.env ファイルを編集し、環境変数 `OPENAI_API_KEY` をあなた自身の API キーに置き換えてください。

### 使用方法

アプリケーションの起動

```
npm start
```

プロンプトに従って、トピックと意見を入力してください。

文法の修正、フィードバック、例文の出力を待ちます。

### 例

このツールの一連の動作例です。

```

----------------------------------------------------------------------------------------------------

I'm happy to engage in a debate with you.

----------------------------------------------------------------------------------------------------

Provide the topic you would like to discuss.

----------------------------------------------------------------------------------------------------

the use of nuclear in Japan

----------------------------------------------------------------------------------------------------

Provide your opinion for the use of nuclear in Japan

----------------------------------------------------------------------------------------------------

That’s a hard question to answer as a Japanese.

I’d say I’m for and against using nuclear power.

I will start by stating my approval.

Nuclear power is a reliable source of electricity that can meet Japan’s high demand for energy. Japan is heavily reliant on imports for energy, and nuclear power provides a domestic source of energy that can reduce the country’s dependence on imports.

Nuclear power is a low-carbon energy source that can help Japan reduce its green gas emissions and meet its climate change goals.

Japan has made significant improvements to its nuclear safety regulations and practices and practices since the Fukushima disaster in 2011 so it can be a safe and effective energy resource.

But Japan has the most earthquakes and there is a risk that earthquakes and tsunamis could damage nuclear power plants and cause a disaster.

In conclusion, whether or not Japan should stop using nuclear power is a complex issue with arguments for and against it.That’s a hard question to answer as a Japanese.

----------------------------------------------------------------------------------------------------

Reviewing your opinion ...

On the one hand, Japan has experienced the devastating consequences of nuclear power through the Fukushima disaster in 2011, which caused massive damage to the environment, health problems for many Japanese citizens, and displacement of thousands. It is hard to forget the pain and trauma that it caused to the people of Japan. Hence, it's natural for some to argue that Japan should not use nuclear power again.

However, on the other hand, Japan is an island nation with limited resources and a high population density, putting pressure on energy supply. Currently, Japan is heavily reliant on fossil fuels for its energy needs, which not only contributes to climate change but has also led to Japan's trade deficit as it has to import most of its oil and gas. Nuclear energy may provide a viable alternative to these resources with its clean, reliable, and abundant energy.

Furthermore, Japan has some of the most technologically advanced and safe nuclear reactor designs. Hence, Japan has the capability of developing a safe nuclear program that could minimize the risk of future accidents. Thus, nuclear power could be a pragmatic solution to the challenges Japan is facing.

In conclusion, while the risks of nuclear power cannot be ignored, Japan could weigh its options carefully and incorporate viable safety measures while utilizing nuclear power. Japan has been the victim of the deadliest nuclear accident to date, and thus, it could become a leader of safe and sustainable nuclear power.

----------------------------------------------------------------------------------------------------

Requesting the grammar review ...

----------------------------------------------------------------------------------------------------

There are no grammatical errors in your opinion. However, it is a single sentence and lacks depth and context necessary for a debate. In a debate, it is important to provide supporting evidence and arguments to present a strong case for your opinion. You may consider expanding your opinion to include specific reasons behind your stance on the use of nuclear in Japan.

----------------------------------------------------------------------------------------------------

Requesting examples of arguments from both perspectives, supporting and opposing the use of nuclear in Japan ...

----------------------------------------------------------------------------------------------------

Sure, here are some examples:

Supporting arguments:
- Nuclear power is a reliable and efficient source of energy, providing a significant amount of Japan's energy needs.
- Japan lacks natural resources and heavily relies on imported fossil fuels, making nuclear power a key option for energy independence.
- Newer nuclear technologies offer improved safety features and waste management techniques, making it safer and more sustainable than before.
- Nuclear power plants provide local jobs and support local economies.

Opposing arguments:
- The Fukushima Daiichi nuclear disaster in 2011 demonstrated the risks and potential consequences of nuclear energy, with long-term health and environmental effects that are still being addressed.
- The improper handling and disposal of radioactive waste poses a significant risk to public health and safety.
- Japan is geographically located in an area of high seismic activity, making it particularly vulnerable to natural disasters that could cause nuclear accidents.
- The development of renewable energy sources such as solar, wind, and hydro power provide alternative, sustainable options for energy without the risks associated with nuclear power.
It was nice talking with you! See you later!

```
