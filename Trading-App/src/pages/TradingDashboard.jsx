import "./TradingDashboard.css";

function TradingDashboard() {
  return (
    <div className="trading-dashboard">

      {/* Navbar */}
      <header className="top-navbar">
        <div className="brand">
          PIP<span>X</span>
        </div>

        <div className="market-search">
          🔍 Search currency pair
        </div>

        <div className="nav-actions">
          🔔
          <div className="account">
            Demo Account
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <main className="trading-layout">

        {/* Watchlist */}
        <aside className="watchlist">
          <h2>Watchlist</h2>

          <div className="pair active">
            <div>
              <strong>EUR/USD</strong>
              <small>Euro / US Dollar</small>
            </div>

            <div className="price">
              1.08452
              <span>+0.25%</span>
            </div>
          </div>

          <div className="pair">
            <div>
              <strong>GBP/USD</strong>
              <small>British Pound / US Dollar</small>
            </div>

            <div className="price">
              1.26341
              <span>+0.18%</span>
            </div>
          </div>

          <div className="pair">
            <div>
              <strong>USD/JPY</strong>
              <small>US Dollar / Japanese Yen</small>
            </div>

            <div className="price">
              149.82
              <span>-0.12%</span>
            </div>
          </div>

          <div className="pair">
            <div>
              <strong>AUD/USD</strong>
              <small>Australian Dollar / US Dollar</small>
            </div>

            <div className="price">
              0.65842
              <span>+0.31%</span>
            </div>
          </div>

          <div className="pair">
            <div>
              <strong>USD/CAD</strong>
              <small>US Dollar / Canadian Dollar</small>
            </div>

            <div className="price">
              1.35621
              <span>-0.08%</span>
            </div>
          </div>
        </aside>

        {/* Chart Area */}
        <section className="chart-section">

          <div className="chart-header">
            <div>
              <h1>EUR/USD</h1>
              <p>Euro / US Dollar</p>
            </div>

            <div className="current-price">
              <strong>1.08452</strong>
              <span>+0.25%</span>
            </div>
          </div>

          <div className="chart-container">
            <div className="chart-placeholder">
              <span>FOREX CHART</span>
              <p>Chart will be added here</p>
            </div>
          </div>

          <div className="timeframes">
            <button>1M</button>
            <button>5M</button>
            <button>15M</button>
            <button>1H</button>
            <button>4H</button>
            <button>1D</button>
            <button>1W</button>
          </div>

        </section>

        {/* Trading Panel */}
        <aside className="trade-panel">

          <h2>Trade EUR/USD</h2>

          <div className="buy-sell">
            <button className="sell-button">
              <small>SELL</small>
              1.08420
            </button>

            <button className="buy-button">
              <small>BUY</small>
              1.08435
            </button>
          </div>

          <div className="trade-input">
            <label>Quantity</label>
            <input type="number" placeholder="0.10" />
          </div>

          <div className="trade-input">
            <label>Stop Loss</label>
            <input type="number" placeholder="Optional" />
          </div>

          <div className="trade-input">
            <label>Take Profit</label>
            <input type="number" placeholder="Optional" />
          </div>

          <button className="place-order">
            Place Order
          </button>

        </aside>

      </main>

      {/* Account Summary */}
      <section className="account-summary">

        <div>
          <small>Balance</small>
          <strong>$10,000.00</strong>
        </div>

        <div>
          <small>Equity</small>
          <strong>$10,000.00</strong>
        </div>

        <div>
          <small>Margin Used</small>
          <strong>$0.00</strong>
        </div>

        <div>
          <small>Free Margin</small>
          <strong>$10,000.00</strong>
        </div>

        <div>
          <small>Profit / Loss</small>
          <strong className="profit">$0.00</strong>
        </div>

      </section>

    </div>
  );
}

export default TradingDashboard;