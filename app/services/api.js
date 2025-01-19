import axios from 'axios';

// API Temel URL
const API_BASE_URL = 'https://api.example.com/api/auth';

/**
 * Kullanıcı girişi yapar.
 * @param {string} identifier - Kullanıcı adı, e-posta veya telefon numarası.
 * @param {string} password - Kullanıcı şifresi.
 * @returns {Promise} - Sunucudan gelen yanıt.
 */
export const loginUser = async (identifier, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, {
      identifier,
      password,
    });
    return response.data; // Gerekirse sadece token veya başka veri döndürülebilir.
  } catch (error) {
    throw error.response?.data?.message || 'Giriş işlemi sırasında bir hata oluştu.';
  }
};

/**
 * Yeni bir kullanıcı kaydeder.
 * @param {Object} userData - Kullanıcı bilgileri.
 * @param {string} userData.email - Kullanıcının e-posta adresi.
 * @param {string} userData.firstName - Kullanıcının adı.
 * @param {string} userData.lastName - Kullanıcının soyadı.
 * @param {string} userData.username - Kullanıcının kullanıcı adı.
 * @param {string} userData.password - Kullanıcının şifresi.
 * @returns {Promise} - Sunucudan gelen yanıt.
 */
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, userData);
    return response.data; // Gerekirse başka veri döndürülebilir.
  } catch (error) {
    throw error.response?.data?.message || 'Kayıt işlemi sırasında bir hata oluştu.';
  }
};
