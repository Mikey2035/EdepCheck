import { Router } from 'express';
import { getUsers, insertUser, loginUser } from '../services/user.service';

const router = Router();

router.get('/users', async (req, res) => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.post('/signup', async (req, res) => {
  try {
    await insertUser(req.body);
    res.json({ success: true });
  } catch (err: any) {
    console.error('Signup error:', err);
    res.status(500).json({ success: false, error: err });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await loginUser(email, password);

    if (user) {
      res.json({ success: true, user }); // ✅ returning full user object
    } else {
      res.status(401).json({ success: false, error: 'Invalid credentials' });
    }
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
});



export default router;
