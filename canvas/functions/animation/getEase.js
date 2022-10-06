function getEase(currentProgress, start, distance, steps, animationFunction) {
  function linear() {
    return currentProgress;
  }

  function getQuadraticEase(currentProgress, start, distance, steps) {
    currentProgress /= steps / 2;
    if (currentProgress <= 1) {
      return (distance / 2) * currentProgress * currentProgress + start;
    }
    currentProgress--;

    return (
      1 * (distance / 2) * (currentProgress * (currentProgress - 2) - 1) + start
    );
  }

  function getCubicEase(currentProgress, start, distance, steps) {
    currentProgress /= steps / 2;
    if (currentProgress < 1) {
      return (distance / 2) * Math.pow(currentProgress, 3) + start;
    }
    currentProgress -= 2;
    return (distance / 2) * (Math.pow(currentProgress, 3) + 2) + start;
  }

  function getQuarticEase(currentProgress, start, distance, steps) {
    currentProgress /= steps / 2;
    if (currentProgress < 1) {
      return (distance / 2) * Math.pow(currentProgress, 4) + start;
    }
    currentProgress -= 2;
    return ((-1 * distance) / 2) * (Math.pow(currentProgress, 4) - 2) + start;
  }

  function getQuinticEase(currentProgress, start, distance, steps) {
    currentProgress /= steps / 2;
    if (currentProgress < 1) {
      return (distance / 2) * Math.pow(currentProgress, 5) + start;
    }
    currentProgress -= 2;
    return (distance / 2) * (Math.pow(currentProgress, 5) + 2) + start;
  }

  function getSinusoidalEase(currentProgress, start, distance, steps) {
    return (
      (-distance / 2) * (Math.cos((Math.PI * currentProgress) / steps) - 1) +
      start
    );
  }

  function getExponentialEase(currentProgress, start, distance, steps) {
    currentProgress /= steps / 2;

    if (currentProgress < 1) {
      return (distance / 2) * Math.pow(2, 10 * (currentProgress - 1)) + start;
    }
    currentProgress--;

    return (distance / 2) * (-Math.pow(2, -10 * currentProgress) + 2) + start;
  }

  switch (animationFunction) {
    case "static":
      return cardPadding;
      break;
    case "quadratic": //??Non funziona
      return getQuadraticEase(currentProgress, start, distance, steps);
      break;
    case "cubic":
      return getCubicEase(currentProgress, start, distance, steps);
      break;
    case "quartic":
      return getQuarticEase(currentProgress, start, distance, steps);
      break;
    case "quintic":
      return getQuinticEase(currentProgress, start, distance, steps);
      break;
    case "sinusoidal":
      return getSinusoidalEase(currentProgress, start, distance, steps);
      break;
    case "exponential":
      return getExponentialEase(currentProgress, start, distance, steps);
      break;
    default:
      return linear(currentProgress, start, distance, steps);
  }
}

export default getEase;
