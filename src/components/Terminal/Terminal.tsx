import React, { useState, useRef, useEffect } from 'react';
import './Terminal.css';

const landingTerminalPage = `
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

const TerminalComponent: React.FC = () => {
  const [commands, setCommands] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');
  const terminalRef = useRef<HTMLDivElement>(null);

  function handleContainerClick() {
    const inputElement = document.getElementById('terminal-input');
    if (inputElement) {
      inputElement.focus();
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
          `\nAvailable commands:`,
          `help       show command list`,
          `exp        my work experience`,
          `edu        my education`,
          `pro        list of my projects`,
          `clear      clear the terminal\n\n`,

        ]);
        break;
      case 'exp':
        setCommands((prevCommands) => [
          ...prevCommands,
          `I am a full stack developer with over 4 years of experience...`,
        ]);
        break;
      case 'edu':
        setCommands((prevCommands) => [
          ...prevCommands,
          `I am a full stack developer with over 4 years of experience...`,
        ]);
        break;
      case 'pro':
        setCommands((prevCommands) => [
          ...prevCommands,
          `1. Project One`,
          `2. Project Two`,
          `3. Project Three`,
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
      <div className="terminal-head">{ landingTerminalPage }</div>
      <div className="terminal-output">
        {commands.map((command, index) => (
          <div key={index}>
            {command}
          </div>
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
