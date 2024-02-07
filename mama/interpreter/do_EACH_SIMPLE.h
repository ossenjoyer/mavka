#pragma once

inline void do_EACH_SIMPLE(MaMa* M, const std::string& name) {
  const auto to = M->stack.top();
  M->stack.pop();
  const auto from = M->stack.top();
  M->stack.pop();
  const auto call_stack_value = M->call_stack.top();
  for (int i = static_cast<int>(from->number);
       i <= static_cast<int>(to->number); ++i) {
    call_stack_value->scope->set_variable(name, create_number(i));
  }
}