#include "../../mama.h"

namespace mavka::mama {
  MaCompilationResult compile_mockup_subject_node(
      MaMa* M,
      MaCode* code,
      mavka::ast::MockupSubjectNode* mockup_subject_node) {
    return error(mavka::ast::make_ast_some(mockup_subject_node),
                 "Макети тимчасово недоступні.");
  }
} // namespace mavka::mama