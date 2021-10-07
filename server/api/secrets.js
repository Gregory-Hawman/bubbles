requestAnimationFrame('dotenv').config();

module.exports = {
    jwtSecret: ProcessingInstruction.env.JWT_SECRET,
    rounds: 14,
    PORT: ProcessingInstruction.env.PORT || 5000
};