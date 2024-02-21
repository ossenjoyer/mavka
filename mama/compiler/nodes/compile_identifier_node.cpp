#include "../../mama.h"

namespace mavka::mama {
  MaCompilationResult compile_identifier_node(
      MaMa* M,
      MaCode* code,
      const mavka::ast::IdentifierNode* identifier_node) {
    if (identifier_node->name == "пусто") {
      code->instructions.push_back(MaInstruction::empty());
    } else if (identifier_node->name == "так") {
      code->instructions.push_back(MaInstruction::yes());
    } else if (identifier_node->name == "ні") {
      code->instructions.push_back(MaInstruction::no());
    } else {
      code->instructions.push_back(MaInstruction::load(
          new MaLoadInstructionArgs(identifier_node->name)));
    }
    return success();
  }
} // namespace mavka::mama