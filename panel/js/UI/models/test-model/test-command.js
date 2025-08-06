/**
 * Class represents test command  that currently loaded when KR is running
 */
class TestCommand {
  /**
   * Create a TestCommand
   *
   * @param {string} name
   * @param {string} defaultTarget
   * @param {string[]} targets
   * @param {string} value
   * @param {boolean} skip
   */
  constructor(name = "", defaultTarget = "", targets = [], value = "", skip = false) {
    this.name = name;
    this.defaultTarget = defaultTarget;
    this.targets = targets;
    this.value = value;
    this.skip = skip;
  }
}

export { TestCommand }