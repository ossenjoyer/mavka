#include "../../mama.h"

namespace mavka::mama {
  MaCompilationResult compile_mockup_module_node(
      MaMa* M,
      MaCode* code,
      mavka::ast::MockupModuleNode* mockup_module_node) {
    return error(mavka::ast::make_ast_some(mockup_module_node),
                 "Макети тимчасово недоступні.");
  }
} // namespace mavka::mama