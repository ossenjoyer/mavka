#ifndef MA_FRAME_H
#define MA_FRAME_H

enum MaFrameType {
  FRAME_TYPE_ROOT,
  FRAME_TYPE_CALL,
  FRAME_TYPE_MODULE,
};
enum MaFrameCallType {
  FRAME_CALL_TYPE_DIIA,
  FRAME_CALL_TYPE_DIIA_NATIVE,
  FRAME_CALL_TYPE_STRUCTURE
};
enum MaArgsType { MA_ARGS_NAMED, MA_ARGS_POSITIONED };

struct MaArgs {
  MaArgsType type;
  std::unordered_map<std::string, MaCell> named;
  std::vector<MaCell> positioned;
};

#define ARGS_SET(a, name, value) (a).v.args->named.insert({(name), (value)});
#define ARGS_PUSH(a, value) (a).v.args->positioned.push_back((value));
#define ARGS_GET(args, index, name, default_value)                          \
  ((args)->type == MA_ARGS_NAMED                                            \
       ? ((args)->named.contains((name)) ? (args)->named[(name)]            \
                                         : (default_value))                 \
       : ((args)->positioned.size() > (index) ? (args)->positioned[(index)] \
                                              : (default_value)))

struct MaCallFrameCallData {
  MaFrameCallType type;
  union {
    MaObject* diia;
    MaObject* diia_native;
    MaObject* structure;
  } o;
  MaInstructionLocation* location;
  size_t restore_stack_size;
};

struct MaFrameModuleData {
  MaObject* module;
};

struct MaFrame {
  MaFrameType type;
  MaScope* scope;
  union {
    MaCallFrameCallData* call;
    MaFrameModuleData* module;
  } data;

  static MaFrame* call(MaScope* scope, MaCallFrameCallData* data);
  static MaFrame* module(MaScope* scope, MaFrameModuleData* data);
};

#endif // MA_FRAME_H