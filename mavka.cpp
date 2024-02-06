#include <fstream>
#include <iostream>
#include <string>
#include "mama/mama.h"

using namespace mavka::mama;

void init_empty(MaMa* M) {
  M->empty_cell = new MaCell(MA_EMPTY);
}

void init_number(MaMa* M) {}

void init_logical(MaMa* M) {
  M->yes_cell = new MaCell(MA_YES);
  M->no_cell = new MaCell(MA_NO);
}

void init_diia(MaMa* M) {}

void init_print(MaMa* M, MaScope* S) {
  const auto diia_cell = new MaCell(MA_DIIA_NATIVE);
  diia_cell->diia_native = [](MaCell* self, MaMa* M, MaScope* S) {
    const auto args_cell = M->stack.top();
    M->stack.pop();
    for (const auto& [key, value] : args_cell->args) {
      std::cout << cell_to_string(value) << std::endl;
    }
    M->stack.push(M->empty_cell);
  };
  S->set_variable("друк", diia_cell);
}

int main() {
  std::ifstream file = std::ifstream("тест.м");
  const auto source = std::string(std::istreambuf_iterator<char>(file),
                                  std::istreambuf_iterator<char>());

  const auto M = new MaMa();
  init_empty(M);
  init_number(M);
  init_logical(M);
  init_diia(M);

  const auto S = new MaScope(nullptr);
  M->call_stack.push(new MaCallStackValue(nullptr, S));
  S->set_variable("пусто", M->empty_cell);
  S->set_variable("так", M->yes_cell);
  S->set_variable("ні", M->no_cell);
  init_print(M, S);

  const auto program_parser_result = mavka::parser::parse(source, "");
  if (program_parser_result->error) {
    std::cout << program_parser_result->error->message << std::endl;
    return 1;
  }

  const auto C = new MaCode();

  for (const auto& node : program_parser_result->program_node->body) {
    const auto result = compile_node(C, node);
    if (result->error) {
      std::cout << result->error->message << std::endl;
      return 1;
    }
  }
  print_code(C);
  std::cout << "---" << std::endl;

  mavka::mama::run(M, S, C);

  // while (M->stack.size()) {
  //   const auto value = M->stack.top();
  //   M->stack.pop();
  //   print_cell(value);
  // }
}