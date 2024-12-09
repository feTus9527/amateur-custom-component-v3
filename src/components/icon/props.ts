export default {
  icon: {
    type: String,
    required: true,
  },
  size: {
    type: String,
  },
  rotation: {
    type: [String, Boolean],
  },
  flip: {
    type: [String, Boolean],
  },
  beat: Boolean,
  "beat-fade": Boolean,
  bounce: Boolean,
  fade: Boolean,
  shake: Boolean,
  spin: Boolean,
  "spin-reverse": Boolean,
  "spin-pulse": Boolean,
  type: String,
  color: String,
};
