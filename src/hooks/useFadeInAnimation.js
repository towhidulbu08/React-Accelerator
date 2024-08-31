import { useEffect } from "react";
import { FadeInAnimation } from "./animation";

export default function useFadeInAnimation(ref, duration) {
  useEffect(() => {
    const animation = new FadeInAnimation(ref.current);
    animation.start(duration);
    return () => {
      animation.stop();
    };

    // const node = ref.current;
    // let frameId = null;
    // let startTime = performance.now();

    // function onProgress(progress) {
    //   node.style.opacity = progress;
    // }

    // function onFrame(now) {
    //   let timePassed = now - startTime;
    //   const progress = Math.min(timePassed / duration, 1);
    //   onProgress(progress);
    //   if (progress < 1) {
    //     frameId = requestAnimationFrame(onFrame);
    //   }
    // }
    // function start() {
    //   onProgress(0);
    //   startTime = performance.now();
    //   frameId = requestAnimationFrame(onFrame);
    // }

    // function stop() {
    //   cancelAnimationFrame(frameId);
    //   frameId = null;
    //   startTime = null;
    // }

    // start();

    // return () => {
    //   stop();
    // };
  }, [ref, duration]);
}
