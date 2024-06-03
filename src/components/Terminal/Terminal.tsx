import React, { useState, useRef, useEffect } from 'react';
import './Terminal.css';


const TerminalLanding = `
**    ********           *******       *******     ****     ****   **
/**   **//////           /**////**     **/////**   /**/**   **/**  /**
/**  /**                 /**   /**    **     //**  /**//** ** /**  /**
/**  /*********   *****  /*******    /**      /**  /** //***  /**  /**
/**  ////////**  /////   /**///**    /**      /**  /**  //*   /**  /**
/**         /**          /**  //**   //**     **   /**   /    /**  /**
/**   ********           /**   //**   //*******    /**        /**  /**
//   ////////            //     //     ///////     //         //   // 

Welcome to the humble terminal!
Type 'help' to show available commands.


`;

const TerminalHelp = `
Available commands:
help       show command list
exp        my work experience
edu        my education
pro        list of my projects
clear      clear the terminal

`;

const TerminalExpEN = `
My roles:
• Application Design & Development
• Database Structure & Administration
• Maintenance & Enhancement
• Project Documentation (BPMN)
• End-User Training & Support

Tech stack:
+--------------+------------------+-------------------------------+
|     Skill    |     Time         |          Description          |
+--------------+------------------+-------------------------------+
|     Operating System                                            |
|-----------------------------------------------------------------|
| Windows      | 4 years 10 month | Environment design and setup  |
|-----------------------------------------------------------------|
|     Language                                                    |
|-----------------------------------------------------------------|
| VB.NET       | 4 years 10 month | Optimal code writing,         |
|              |                  | instructions, modifications   |
| C#           | 4 years 10 month | Optimal code writing,         |
|              |                  | instructions, modifications   |
| JavaScript   | 4 years 10 month | Optimal code writing,         |
|              |                  | instructions, modifications   |
| TypeScript   | 4 years 10 month | Optimal code writing,         |
|              |                  | instructions, modifications   |
| flutter      | < 6 month        | Basic code writing and reading|
| python       | < 6 month        | Basic code writing and reading|
| PHP          | < 6 month        | Basic code writing and reading|
|-----------------------------------------------------------------|
|     Framework                                                   |
|-----------------------------------------------------------------|
| Angular      | 4 years 10 month | Optimal use                   |
| React        | < 6 month        | Basic usage                   |
| NextJS       | < 6 month        | Basic usage                   |
| Vite         | < 6 month        | Basic usage                   |
|-----------------------------------------------------------------|
|     Database                                                    |
|-----------------------------------------------------------------|
| Ms.SQL       | 4 years 10 month | Optimal usage                 |
| PostgreSQL   | < 6 month        | Basic usage                   |
+--------------+------------------+-------------------------------+

`;

// const TerminalExpJP = `
// 役割:
// • アプリケーション設計と開発
// • データベース構造と管理
// • メンテナンスと改善
// • プロジェクト文書化 (BPMN)
// • エンドユーザーのトレーニングとサポート

// テックスタック:
// +--------------+------------------+-------------------------------+
// |    スキル     |     時間         |           説明                 |
// +--------------+------------------+-------------------------------+
// | Operation System                                                |
// |-----------------------------------------------------------------|
// |  Windows     | 4 年 10 ヶ月     | 環境の設計とセットアップ          |
// |-----------------------------------------------------------------|
// |    Languages                                                    |
// |-----------------------------------------------------------------|
// |  VB.NET      | 4 年 10 ヶ月     | 最適なコードの作成, 指示, 変更    |
// |  C#          | 4 年 10 ヶ月     | 最適なコードの作成, 指示, 変更    |
// |  JavaScript  | 4 年 10 ヶ月     | 最適なコードの作成, 指示, 変更    |
// |  TypeScript  | 4 年 10 ヶ月     | 最適なコードの作成, 指示, 変更    |
// |  flutter     | 6 ヶ月未満       | 基本的なコードの作成と読み取り     |
// |  python      | 6 ヶ月未満       | 基本的なコードの作成と読み取り     |
// |  PHP         | 6 ヶ月未満       | 基本的なコードの作成と読み取り     |
// |-----------------------------------------------------------------|
// |  Frameworks                                                     |
// |-----------------------------------------------------------------|
// |  Angular     | 4 年 10 ヶ月     | 最適な使用                      |
// |  React       | 6 ヶ月未満       | 基本的な使用                     |
// |  NextJS      | 6 ヶ月未満       | 基本的な使用                     |
// |  Vite        | 6 ヶ月未満       | 基本的な使用                     |
// |-----------------------------------------------------------------|
// |  Database                                                       |
// |-----------------------------------------------------------------|
// |  Ms SQL      | 4 年 10 ヶ月     | 最適な使用                      |
// |  PostgreSQL  | 6 ヶ月未満       | 基本的な使用                     |
// +--------------+------------------+-------------------------------+


// `;

const TerminalEduEN = `
+---------------------------------------------------+
|                                                   |
|   Mikroskil University                            |
|  +---------------------------------------------+  |
|  |                                             |  |
|  |  August 2014 ~ February 2019                |  |
|  |  Bachelor of Science in Computer Science    |  |
|  |  GPA: 3.53                                  |  |
|  |                                             |  |
|  +---------------------------------------------+  |
|                                                   |
+---------------------------------------------------+

`;

const TerminalProjectEN = `
<div class="project-list">
  <div class="project-item">
    <img src="images/video-con.gif" alt="Video Conference App" class="project-gif" />
    <div class="project-description">
      <h3><a href="https://boom-video-conference.netlify.app/" target="_blank">Video Conference App</a></h3>
      <p>A video conference application built using React with TypeScript and Next.js.</p>
    </div>
  </div>
  <div class="project-item">
    <img src="images/clock25plus5.gif" alt="25 + 5 Clock" class="project-gif" />
    <div class="project-description">
      <h3><a href="https://26thdeccake.github.io/fcc-vite-25-plus-5-clock/" target="_blank">25 + 5 Clock</a></h3>
      <p>Simple 25 + 5 Clock built with Vite with TypeScript.</p>
    </div>
  </div>
  <div class="project-item">
    <img src="images/drummachine.gif" alt="Drum Machine" class="project-gif" />
    <div class="project-description">
      <h3><a href="https://26thdeccake.github.io/fcc-drum-machine/" target="_blank">Drum Machine</a></h3>
      <p>Drum Machine, each button plays a different sound and binded to specified key.</p>
    </div>
  </div>
  <div class="project-item">
    <img src="images/tictactoe.gif" alt="Tic Tac Toe" class="project-gif" />
    <div class="project-description">
      <h3><a href="https://26thdeccake.github.io/tic-tac-toe-nextjs/" target="_blank">Tic Tac Toe</a></h3>
      <p>Tic Tac Toe, align 3 of the same symbol to win.</p>
    </div>
  </div>
</div>
`;

const TerminalComponent: React.FC = () => {
  const [commands, setCommands] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');
  const terminalRef = useRef<HTMLDivElement>(null);

  function handleContainerClick(event: React.MouseEvent<HTMLDivElement>) {
    const inputElement = document.getElementById('terminal-input');
    if (inputElement && !(event.target as HTMLElement).matches('a')) {
      inputElement.focus({ preventScroll: true });
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
  };

  const handleCommand = (command: string) => {
    setCommands((prevCommands) => [...prevCommands, `is_Romi:~$ ${command}`]);

    switch (command.toLowerCase()) {
      case 'help':
        setCommands((prevCommands) => [
          ...prevCommands,
          TerminalHelp,
        ]);
        break;
      case 'exp':
        setCommands((prevCommands) => [
          ...prevCommands,
          TerminalExpEN,
        ]);
        break;
      case 'edu':
        setCommands((prevCommands) => [
          ...prevCommands,
          TerminalEduEN,
        ]);
        break;
      case 'pro':
        setCommands((prevCommands) => [
          ...prevCommands,
          TerminalProjectEN,
        ]);
        break;
      case 'clear':
        setCommands([]);
        break;
      default:
        setCommands((prevCommands) => [
          ...prevCommands,
          `Command not found: ${command}. Type 'help' for a list of available commands.\n\n`,
        ]);
        break;
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commands]);

  return (
    <div className="terminal-container" ref={terminalRef} onClick={handleContainerClick}>
      <div className="terminal-head">{ TerminalLanding }</div>
      <div className="terminal-output">
        {commands.map((command, index) => (
          <div
            key={index}
            dangerouslySetInnerHTML={{ __html: command }}
          />
        ))}
      </div>
      <div className="terminal-input">
        <div className="terminal-prompt">is_Romi:~$</div>
        <input
          id='terminal-input'
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          autoFocus
        />
      </div>
    </div>
  );
};

export default TerminalComponent;
