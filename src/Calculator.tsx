import './styles/Calculator.scss';

export const Calculator = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <header>
        <h1>Calculator</h1>
      </header>
      <main>
        <div className="calc-container">
          <div className="calc-display"></div>
          <div className="key-container">
            <div className="mod-key"></div>
            <div className="mod-key"></div>
            <div className="mod-key"></div>
            <div className="operator-key"></div>
            <div className="digit-key"></div>
            <div className="digit-key"></div>
            <div className="digit-key"></div>
            <div className="operator-key"></div>
            <div className="digit-key"></div>
            <div className="digit-key"></div>
            <div className="digit-key"></div>
            <div className="operator-key"></div>
            <div className="digit-key"></div>
            <div className="digit-key"></div>
            <div className="digit-key"></div>
            <div className="operator-key"></div>
            <div className="digit-key"></div>
            <div className="dot-key"></div>
            <div
              className="operator-key"
              style={{
                gridColumn: '3 / span 2',
              }}
            ></div>
          </div>
        </div>
      </main>
    </div>
  );
};
