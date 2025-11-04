import styled from 'styled-components';

export const ButtonLoad = styled.button`
  display: block;
  margin: 40px auto;
  padding: 12px 36px;
  border-radius: 8px;
  background: linear-gradient(135deg, #2563eb, #1e40af);
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.25s ease;
  letter-spacing: 0.3px;
  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.3);

  &:hover {
    background: linear-gradient(135deg, #1d4ed8, #1e3a8a);
    box-shadow: 0 6px 18px rgba(29, 78, 216, 0.35);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 3px 8px rgba(29, 78, 216, 0.2);
  }

  &:disabled {
    background: #94a3b8;
    cursor: not-allowed;
    box-shadow: none;
  }
`;
