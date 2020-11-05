import React, { Component } from "react"
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      files:
        "/etc/hive/3.1.0.0-78/0/hive-site.xml\n/etc/hive/3.1.0.0-78/0/hive-site.xml\n/etc/hive/3.1.0.0-78/0/hive-site.xml",
      masterUrls: "yarn",
      deployMode: "client",
      executorMemory: "5",
      numberOfExecutors: "20",
      executorCores: "20",
      queue: "DataScience",
      networkTimeout: "12000",
      heartbeatInterval: "13800",
      applicationName: "my-spark-application",
      applicationPackage: "/home/admin/yapa.jar",
      applicationArguments: "",
      output: ""
    };

    this.handleInputs = this.handleInputs.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInputs(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    });
  }

  handleClick() {
    this.textArea.select();
    document.execCommand("copy");
  }

  render() {
    let output = "spark-submit \\\n";
    const outputValues = [
      `--files ${this.state.files.split("\n").join(",")} \\\n`,
      `--master ${this.state.masterUrls} \\\n`,
      `--deploy-mode ${this.state.deployMode} \\\n`,
      `--executor-memory ${this.state.executorMemory}G \\\n`,
      `--num-executors ${this.state.numberOfExecutors} \\\n`,
      `--total-executor-cores ${this.state.executorCores} \\\n`,
      `--queue ${this.state.queue} \\\n`,
      `--conf spark.network.timeout=${this.state.networkTimeout}s \\\n`,
      `--conf spark.executor.heartbeatInterval=${this.state.heartbeatInterval}s \\\n`,
      `--name ${this.state.applicationName} `,
      `${this.state.applicationPackage} `,
      `${this.state.applicationArguments} \\`
    ];

    for (let val = 0; val < outputValues.length; val++) {
      output += outputValues[val];
    }

    const style = {
      display: "none"
    };

    return (
      <div className="app">
        <section className="left">
          <form>
            <div className="files">
              <h4>Files</h4>
              <label>
                <textarea
                  cols={50}
                  rows={4}
                  name="files"
                  placeholder="Paste files here. Each file on a new line."
                  value={this.state.files}
                  onChange={this.handleInputs}
                />
              </label>
            </div>
            <div className="radios">
              <h4>Master URLs</h4>
              <label>
                <input
                  type="radio"
                  name="masterUrls"
                  value="yarn"
                  checked={this.state.masterUrls === "yarn"}
                  onChange={this.handleInputs}
                />
                Yarn
              </label>
              <label>
                <input
                  type="radio"
                  name="masterUrls"
                  value="local"
                  checked={this.state.masterUrls === "local"}
                  onChange={this.handleInputs}
                />
                Local
              </label>
            </div>
            <div className="radios">
              <h4>Deploy Mode</h4>

              <label>
                <input
                  type="radio"
                  name="deployMode"
                  value="cluster"
                  checked={this.state.deployMode === "cluster"}
                  onChange={this.handleInputs}
                />
                Cluster
              </label>
              <label>
                <input
                  type="radio"
                  name="deployMode"
                  value="client"
                  checked={this.state.deployMode === "client"}
                  onChange={this.handleInputs}
                />
                Client
              </label>
            </div>
            <div>
              <h4>Executor Memory</h4>
              <input
                className="range"
                type="range"
                name="executorMemory"
                value={this.state.executorMemory}
                min={1}
                max={100}
                step={1}
                onChange={this.handleInputs}
              />
              <span className="rangeOutput">{this.state.executorMemory}</span>
            </div>
            <div>
              <h4>Number of Executors</h4>

              <input
                className="range"
                type="range"
                name="numberOfExecutors"
                value={this.state.numberOfExecutors}
                min={1}
                max={50}
                step={1}
                onChange={this.handleInputs}
              />
              <span className="rangeOutput">
                {this.state.numberOfExecutors}
              </span>
            </div>
            <div>
              <h4>Executor Cores</h4>
              <input
                className="range"
                type="range"
                name="executorCores"
                value={this.state.executorCores}
                min={1}
                max={50}
                step={1}
                onChange={this.handleInputs}
              />
              <span className="rangeOutput">{this.state.executorCores}</span>
            </div>
            <div className="radios">
              <h4>Queue</h4>
              <label>
                <input
                  type="radio"
                  name="queue"
                  value="DataEngineering"
                  checked={this.state.queue === "DataEngineering"}
                  onChange={this.handleInputs}
                />
                Data Engineering
              </label>
              <label>
                <input
                  type="radio"
                  name="queue"
                  value="DataScience"
                  checked={this.state.queue === "DataScience"}
                  onChange={this.handleInputs}
                />
                Data Science
              </label>
            </div>
            <div>
              <h4>Network Timeout</h4>

              <input
                className="range"
                type="range"
                name="networkTimeout"
                value={this.state.networkTimeout}
                mix={0}
                max={18000}
                step={1}
                onChange={this.handleInputs}
              />
              <span className="rangeOutput">{this.state.networkTimeout}</span>
            </div>
            <div>
              <h4>Executor Heartbeat Interval</h4>
              <input
                className="range"
                type="range"
                name="heartbeatInterval"
                value={this.state.heartbeatInterval}
                mix={0}
                max={18000}
                step={1}
                onChange={this.handleInputs}
              />
              <span className="rangeOutput">
                {this.state.heartbeatInterval}
              </span>
            </div>
            <div>
              <h4>Application Name</h4>

              <input
                className="text-box"
                type="text"
                name="applicationName"
                value={this.state.applicationName}
                onChange={this.handleInputs}
              />
            </div>
            <div>
              <h4>Application Package</h4>
              <input
                className="text-box"
                type="text"
                name="applicationPackage"
                value={this.state.applicationPackage}
                onChange={this.handleInputs}
              />
            </div>
            <div>
              <h4>Application Arguments</h4>

              <input
                className="text-box"
                type="text"
                name="applicationArguments"
                placeholder="Optional"
                value={this.state.applicationArguments}
                onChange={this.handleInputs}
              />
            </div>
          </form>
        </section>
        <section className="right">
          <h4>Script Preview</h4>
          <textarea
            ref={(textarea) => (this.textArea = textarea)}
            cols={60}
            rows={19}
            name="output"
            value={output}
            onChange={this.handleInput}
            style={this.state.files === "" ? style : null}
          />

          <div>
            <button className="copyBtn" onClick={this.handleClick}>
              Copy
            </button>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
