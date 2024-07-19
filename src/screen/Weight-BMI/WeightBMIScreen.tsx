import React, {useState} from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import {BaseScreen} from '../../component/base-screen';
import {color, ms} from '../../themes';
import AppInput from '../../component/app-input';
import {AppButton} from '../../component/app-button';
import {AppNavBar} from '../../component/app-nav-bar';

const WeightBMIScreen = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [advice, setAdvice] = useState('');

  const calculateBMI = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height) / 100;
    if (weightNum > 0 && heightNum > 0) {
      const bmiValue = weightNum / (heightNum * heightNum);
      const bmiRounded = bmiValue.toFixed(2);
      setBMI(bmiRounded);
      setAdvice(generateBMIAdvice(bmiRounded));
    } else {
      setBMI(null);
      setAdvice('');
      Alert.alert('Lỗi', 'Vui lòng nhập cân nặng và chiều cao hợp lệ.');
    }
  };

  const generateBMIAdvice = (bmi: string) => {
    const bmiValue = parseFloat(bmi);
    if (bmiValue < 18.5) {
      return 'Bạn đang dưới cân. Hãy ăn nhiều hơn và kiểm tra lại dinh dưỡng của bạn.';
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      return 'BMI của bạn nằm trong khoảng bình thường. Hãy duy trì lối sống lành mạnh.';
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      return 'Bạn đang thừa cân. Hãy xem xét chế độ ăn uống và tập thể dục đều đặn.';
    } else {
      return 'Bạn đang béo phì. Hãy tham khảo ý kiến bác sĩ để có lời khuyên phù hợp.';
    }
  };

  return (
    <BaseScreen>
      <AppNavBar title="Tính toán BMI" />
      <View style={styles.container}>
        <Text style={styles.title}>Máy tính BMI</Text>
        <AppInput
          placeholder="Cân nặng (kg)"
          keyboardType="numeric"
          value={weight}
          onChange={setWeight}
        />
        <AppInput
          placeholder="Chiều cao (cm)"
          keyboardType="numeric"
          value={height}
          onChange={setHeight}
        />
        <AppButton title="Tính toán BMI" onPress={calculateBMI} />
        {bmi && (
          <View>
            <Text style={styles.result}>BMI của bạn là: {bmi}</Text>
            <Text style={styles.advice}>{advice}</Text>
          </View>
        )}
      </View>
    </BaseScreen>
  );
};

export default WeightBMIScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    rowGap: ms(12),
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: color.white,
  },
  result: {
    marginTop: 16,
    fontSize: 24,
    color: color.white,
  },
  advice: {
    marginTop: 8,
    fontSize: 18,
    color: color.white,
  },
});
