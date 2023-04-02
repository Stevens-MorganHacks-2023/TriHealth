import React, { useState, useEffect } from 'react';
import {
  MasterNutritionToday,
  MasterNutritionWeek,
  MasterUserProfile,
  MasterMind,
  MasterBodySleep,
  MasterBody,
  MasterNutritionCameraInput,
  MasterHome,
  MasterShowKPIsAdjustHabits,
  MasterHealthDataPermissions,
  MasterFocuses,
  MasterQuestionHoursofSleep,
  MasterQuestionActivityLevel,
  MasterQuestionSex,
  MasterQuestionWeight,
  MasterQuestionHeight,
  MasterQuestionBirthday,
  MasterQuestionName,
  MasterLandingPage,
} from './src/figmaComponents';

const components = [
  MasterLandingPage,
  MasterQuestionName,
  MasterQuestionBirthday,
  MasterQuestionHeight,
  MasterQuestionWeight,
  MasterQuestionSex,
  MasterQuestionActivityLevel,
  MasterQuestionHoursofSleep,
  MasterFocuses,
  MasterNutritionToday,
  MasterNutritionWeek,
  MasterHealthDataPermissions,
  MasterShowKPIsAdjustHabits,
  MasterNutritionCameraInput,
  MasterBodySleep,
  MasterBody,
  MasterMind,
  MasterHome,
  MasterUserProfile,
];

function App() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % components.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const Component = components[index];

  return <Component />;
}

export default App;
