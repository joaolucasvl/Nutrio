import { describe, it, expect } from 'vitest';
import { calcularTMB } from '../pages/tbm';
import { calcularIMC } from '../pages/imc';

describe('Função calcularTMB', () => {
  it('calcular a TMB para um homem', () => {
    const resultado = calcularTMB(70, 175, 25, 'masculino');
    expect(resultado).toBeCloseTo(66 + (13.7 * 70) + (5 * 175) - (6.8 * 25), 2);
  });

  it('calcular a TMB para uma mulher', () => {
    const resultado = calcularTMB(60, 165, 30, 'feminino');
    expect(resultado).toBeCloseTo(655 + (9.6 * 60) + (1.8 * 165) - (4.7 * 30), 2);
  });
});

describe('Função calcularIMC', () => {
    it('calcular corretamente o IMC', () => {
      const resultado = calcularIMC(70, 175); // 70kg e 1.75m
      expect(resultado).toBeCloseTo(22.86, 2);
    });
  
    it('calcular IMC para altura baixa e peso baixo', () => {
      const resultado = calcularIMC(50, 150);
      expect(resultado).toBeCloseTo(22.22, 2);
    });
  });