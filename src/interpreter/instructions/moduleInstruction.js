import Instruction from "./utils/instruction.js";
import Context from "../contexts/context.js";

async function run(mavka, context, node) {
  const moduleContext = new Context(mavka, context);
  moduleContext.setAsync(true);

  const moduleProgram = node.program;

  const giveContext = new Context(mavka);
  moduleContext.set("__give_context__", giveContext);

  if (moduleProgram) {
    await mavka.run(moduleContext, moduleProgram.body);
  }

  return mavka.makeModule(node.name.name, giveContext);
}

class ModuleInstruction extends Instruction {
  /**
   * @param {Context} context
   * @param {ModuleNode} node
   * @returns {*}
   */
  runSync(context, node) {
    throw "Cannot create module in sync context";
  }

  /**
   * @param {Context} context
   * @param {ModuleNode} node
   * @returns {Promise<*>}
   */
  async runAsync(context, node) {
    const moduleCell = await run(this.mavka, context, node);

    context.set(node.name.name, moduleCell);

    return moduleCell;
  }
}

export default ModuleInstruction;
