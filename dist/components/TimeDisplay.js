import { Component as r } from "react";
import { formatTime as u } from "../format.js";
const s = (e) => typeof e == "number" && Number.isFinite(e) && !Number.isNaN(e);
class o extends r {
  constructor(t) {
    super(t), this.timer = null, this.last_seen_value = void 0, this.state = {
      value: 0
    }, s(t.value) && (this.state.value = Number(t.value), this.last_seen_value = Number(t.value));
  }
  componentDidUpdate() {
    this.props.auto !== void 0 && (clearInterval(this.timer), this.timer = setInterval(() => this.tick(), 1e3));
  }
  tick() {
    let t = Number(this.state.value);
    this.props.value !== this.last_seen_value && (this.last_seen_value = this.props.value, t = this.props.value);
    const i = this.props.auto === "up" ? 10 : -10, a = Math.max(0, t + i);
    this.setState({ value: a });
  }
  componentDidMount() {
    this.props.auto !== void 0 && (this.timer = setInterval(() => this.tick(), 1e3));
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    const t = this.state.value;
    return s(t) ? u(t) : this.state.value || null;
  }
}
export {
  o as TimeDisplay
};
