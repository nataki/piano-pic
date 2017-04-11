import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import './styles/list.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className='main'>
          <div className="sidebar">
            <div>Sort by:</div>
            <ul>
              <li>Name</li>
              <li>Rating asc</li>
              <li>Rating desc</li>
              <li>Custom</li>
            </ul>
          </div>
          <div className="list">
              <div className="list-item">
                <img src="https://unsplash.it/200/300/?image=1079" alt="item-1" />
                <div className="list-item-info">name</div>
                <div className="list-item-tools">
                  <a href="#"
                    onCLick="">+1</a>
                  <span>13</span>
                  <a href="#"
                    onCLick="">-1</a>
                </div>
              </div>
              <div className="list-item">
                <img src="https://unsplash.it/200/300/?image=1080" alt="item-2" />
                <div className="list-item-info">name</div>
                <div className="list-item-tools">
                  <a href="#"
                    onCLick="">+1</a>
                  <span>13</span>
                  <a href="#"
                    onCLick="">-1</a>
                </div>
              </div>
              <div className="list-item">
                <img src="https://unsplash.it/200/300/?image=1078" alt="item-3" />
                <div className="list-item-info">name</div>
                <div className="list-item-tools">
                  <a href="#"
                    onCLick="">+1</a>
                  <a href="#"
                    onCLick="">-1</a>
                </div>
              </div>
              <div className="list-item">
                <img src="https://unsplash.it/200/300/?image=1077" alt="item-4" />
                <div className="list-item-info">name</div>
                <div className="list-item-tools">
                  <a href="#"
                    onCLick="">+1</a>
                  <a href="#"
                    onCLick="">-1</a>
                </div>
              </div>
              <div className="list-item">
                <img src="https://unsplash.it/200/300/?image=1076" alt="item-5" />
                <div className="list-item-info">name</div>
                <div className="list-item-tools">
                  <a href="#"
                    onCLick="">+1</a>
                  <a href="#"
                    onCLick="">-1</a>
                </div>
              </div>
              <div className="list-item">
                <img src="https://unsplash.it/200/300/?image=1075" alt="item-6" />
                <div className="list-item-info">name</div>
                <div className="list-item-tools">
                  <a href="#"
                    onCLick="">+1</a>
                  <a href="#"
                    onCLick="">-1</a>
                </div>
              </div>
              <div className="list-item">
                <img src="https://unsplash.it/200/300/?image=1074" alt="item-7" />
                <div className="list-item-info">name</div>
                <div className="list-item-tools">
                  <a href="#"
                    onCLick="">+1</a>
                  <a href="#"
                    onCLick="">-1</a>
                </div>
              </div>
              <div className="list-item">
                <img src="https://unsplash.it/200/300/?image=1073" alt="item-3" />
                <div className="list-item-info">name</div>
                <div className="list-item-tools">
                  <a href="#"
                    onCLick="">+1</a>
                  <a href="#"
                    onCLick="">-1</a>
                </div>
              </div>
          </div>
        </div>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;
