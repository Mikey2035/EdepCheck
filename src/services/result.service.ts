export const saveResult = async (score: number, severity: string, userId: number) => {
  try {
    const res = await fetch('http://localhost:4000/results', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ score, severity, user_id: userId }),
    });
    return await res.json();
  } catch (err) {
    console.error('Error saving result:', err);
    throw err;
  }
};


export const fetchResults = async (userId: number) => {
  try {
    const res = await fetch(`http://localhost:4000/results?user_id=${userId}`);
    return await res.json();
  } catch (err) {
    console.error('Error fetching results:', err);
    return [];
  }
};