import React, { useState } from 'react';
import { Skull, Camera, Calculator, ShieldQuestion, AlertTriangle, Zap } from 'lucide-react';

type LoginStep = 'login' | 'mirror' | 'math' | 'security' | 'success';

function App() {
  const [currentStep, setCurrentStep] = useState<LoginStep>('login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mathAnswer, setMathAnswer] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const showRoastPopup = (message: string) => {
    setPopupMessage(message);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  const handleLogin = () => {
    if (username && password) {
      setCurrentStep('mirror');
    }
  };

  const handleMathSubmit = () => {
    if (mathAnswer === '4') {
      showRoastPopup("Wrong! Beauty blinded you. Correct answer: Potato.");
    } else {
      setCurrentStep('security');
    }
  };

  const handleSecuritySubmit = () => {
    if (selectedOption !== 'you') {
      showRoastPopup("LOL nope. They're bad, but you're the undisputed champion 💀");
    } else {
      setCurrentStep('success');
    }
  };

  const renderLogin = () => (
    <div className="min-h-screen bg-gradient-to-br from-red-500 via-red-600 to-orange-500 flex flex-col">
      {/* Warning Banner */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold py-3 px-6 border-b-4 border-red-600">
        <div className="flex items-center justify-center gap-2">
          <AlertTriangle className="w-6 h-6" />
          <span className="text-lg">⚠️ CAUTION: SELF-ESTEEM NOT REFUNDABLE ⚠️</span>
          <AlertTriangle className="w-6 h-6" />
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-6">
        <div className="bg-black/20 backdrop-blur-sm border-4 border-yellow-400 rounded-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="flex justify-center gap-4 mb-4">
              <Skull className="w-12 h-12 text-yellow-400" />
              <div className="bg-red-600 text-yellow-400 px-4 py-2 rounded-lg border-2 border-yellow-400">
                <span className="text-2xl font-black">UGLY FACE</span>
              </div>
              <Skull className="w-12 h-12 text-yellow-400" />
            </div>
            <div className="bg-yellow-400 text-red-600 px-6 py-3 rounded-lg border-2 border-red-600 mb-4">
              <span className="text-3xl font-black">DETECTOR</span>
            </div>
            <div className="bg-yellow-300 text-black px-4 py-2 rounded-lg border-2 border-red-600">
              <span className="font-bold">🔥 WHERE BEAUTY COMES TO DIE 🔥</span>
            </div>
          </div>

          <div className="bg-black/30 p-6 rounded-xl border-2 border-yellow-400 mb-6">
            <h2 className="text-yellow-400 font-bold text-xl mb-4 text-center">
              💀 SHOW GROSS FACE 💀
            </h2>
            <div className="bg-black/50 p-4 rounded-lg border border-yellow-400 mb-6">
              <p className="text-yellow-300 text-sm text-center">
                ⚠️ WARNING: YOUR EGO MAY NOT SURVIVE THIS ⚠️
              </p>
              <p className="text-yellow-400 text-xs text-center mt-2">
                💀 Prepare for maximum roasting. No mercy. No survivors. 💀
              </p>
            </div>
            
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Username (victim ID)"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 bg-black/50 border-2 border-yellow-400 rounded-lg text-yellow-400 placeholder-yellow-600 focus:outline-none focus:border-red-400"
              />
              <input
                type="password"
                placeholder="Password (last dignity)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-black/50 border-2 border-yellow-400 rounded-lg text-yellow-400 placeholder-yellow-600 focus:outline-none focus:border-red-400"
              />
            </div>
          </div>

          <button
            onClick={handleLogin}
            disabled={!username || !password}
            className="w-full bg-gradient-to-r from-red-600 to-red-700 text-yellow-400 font-black text-xl py-4 rounded-xl border-3 border-yellow-400 hover:from-red-700 hover:to-red-800 hover:scale-105 transform transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
          >
            💀 LOGIN (IF YOU DARE) 💀
          </button>
        </div>
      </div>
    </div>
  );

  const renderMirror = () => (
    <div className="min-h-screen bg-gradient-to-br from-red-500 via-red-600 to-orange-500 flex flex-col">
      <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold py-3 px-6 border-b-4 border-red-600">
        <div className="flex items-center justify-center gap-2">
          <Skull className="w-6 h-6" />
          <span className="text-lg">💀 MIRROR CRASH PROTOCOL ACTIVATED 💀</span>
          <Skull className="w-6 h-6" />
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-6">
        <div className="bg-black/20 backdrop-blur-sm border-4 border-yellow-400 rounded-2xl p-8 w-full max-w-lg text-center">
          <div className="mb-8">
            <Camera className="w-24 h-24 text-yellow-400 mx-auto mb-4 animate-pulse" />
            <div className="text-8xl mb-4">🪞</div>
            <div className="bg-red-600 border-4 border-yellow-400 rounded-xl p-6">
              <h2 className="text-yellow-400 font-black text-2xl mb-4">
                💥 SYSTEM ERROR 💥
              </h2>
              <p className="text-yellow-300 text-lg font-bold leading-relaxed">
                Oops! System crashed while trying to recognize that face. 
                <br />
                <span className="text-red-300">Please try again after 10 years.</span>
              </p>
            </div>
          </div>

          <button
            onClick={() => setCurrentStep('math')}
            className="bg-gradient-to-r from-orange-500 to-red-600 text-yellow-400 font-black text-xl py-4 px-8 rounded-xl border-3 border-yellow-400 hover:from-orange-600 hover:to-red-700 hover:scale-105 transform transition-all duration-200 shadow-lg"
          >
            🔥 TRY ANOTHER WAY 🔥
          </button>
        </div>
      </div>
    </div>
  );

  const renderMath = () => (
    <div className="min-h-screen bg-gradient-to-br from-red-500 via-red-600 to-orange-500 flex flex-col">
      <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold py-3 px-6 border-b-4 border-red-600">
        <div className="flex items-center justify-center gap-2">
          <Calculator className="w-6 h-6" />
          <span className="text-lg">🧠 BRAIN DAMAGE ASSESSMENT 🧠</span>
          <Calculator className="w-6 h-6" />
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-6">
        <div className="bg-black/20 backdrop-blur-sm border-4 border-yellow-400 rounded-2xl p-8 w-full max-w-lg text-center">
          <div className="mb-8">
            <div className="bg-purple-600 border-4 border-yellow-400 rounded-xl p-6 mb-6">
              <h2 className="text-yellow-400 font-black text-3xl mb-4">
                🔥 MATH FOR MASOCHISTS 🔥
              </h2>
              <p className="text-yellow-300 text-lg font-bold mb-6">
                Solve this to prove you deserve access:
              </p>
              <div className="text-6xl font-black text-yellow-400 mb-4">
                2 + 2 = ?
              </div>
            </div>
            
            <input
              type="text"
              placeholder="Your pathetic answer..."
              value={mathAnswer}
              onChange={(e) => setMathAnswer(e.target.value)}
              className="w-full px-4 py-3 bg-black/50 border-2 border-yellow-400 rounded-lg text-yellow-400 placeholder-yellow-600 focus:outline-none focus:border-red-400 text-center text-2xl font-bold mb-6"
            />
          </div>

          <button
            onClick={handleMathSubmit}
            disabled={!mathAnswer}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-yellow-400 font-black text-xl py-4 px-8 rounded-xl border-3 border-yellow-400 hover:from-purple-700 hover:to-pink-700 hover:scale-105 transform transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
          >
            💀 SUBMIT & GET ROASTED 💀
          </button>
        </div>
      </div>
    </div>
  );

  const renderSecurity = () => (
    <div className="min-h-screen bg-gradient-to-br from-red-500 via-red-600 to-orange-500 flex flex-col">
      <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold py-3 px-6 border-b-4 border-red-600">
        <div className="flex items-center justify-center gap-2">
          <ShieldQuestion className="w-6 h-6" />
          <span className="text-lg">💀 FINAL JUDGMENT DAY 💀</span>
          <ShieldQuestion className="w-6 h-6" />
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-6">
        <div className="bg-black/20 backdrop-blur-sm border-4 border-yellow-400 rounded-2xl p-8 w-full max-w-2xl">
          <div className="text-center mb-8">
            <h1 className="text-yellow-400 font-black text-4xl mb-4">
              💀 LAST CHANCE, UGLY! 💀
            </h1>
            <div className="bg-red-600 border-4 border-yellow-400 rounded-xl p-6 mb-8">
              <h2 className="text-yellow-400 font-black text-2xl mb-4">
                Who is the ugliest?
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 mb-8">
            {[
              { id: 'rakhi', name: 'Rakhi', emoji: '🐸', color: 'from-green-500 to-green-600' },
              { id: 'deepak', name: 'Deepak', emoji: '🍞', color: 'from-orange-500 to-yellow-500' },
              { id: 'urfi', name: 'Urfi', emoji: '👗', color: 'from-pink-500 to-purple-500' },
              { id: 'puneet', name: 'Puneet', emoji: '🥔', color: 'from-yellow-600 to-orange-600' },
              { id: 'you', name: 'YOU', emoji: '💀', color: 'from-red-600 to-black' }
            ].map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedOption(option.id)}
                className={`bg-gradient-to-r ${option.color} text-white font-black text-xl py-4 px-6 rounded-xl border-3 border-yellow-400 hover:scale-105 transform transition-all duration-200 shadow-lg ${
                  selectedOption === option.id ? 'ring-4 ring-yellow-400' : ''
                }`}
              >
                <span className="text-3xl mr-4">{option.emoji}</span>
                {option.name}
                {option.id === 'you' && <span className="ml-2 text-yellow-400">(CORRECT ANSWER)</span>}
              </button>
            ))}
          </div>

          <button
            onClick={handleSecuritySubmit}
            disabled={!selectedOption}
            className="w-full bg-gradient-to-r from-black to-red-900 text-yellow-400 font-black text-xl py-4 rounded-xl border-3 border-yellow-400 hover:from-red-900 hover:to-black hover:scale-105 transform transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
          >
            💀 PROCEED TO DESTRUCTION 💀
          </button>
        </div>
      </div>
    </div>
  );

  const renderSuccess = () => (
    <div className="min-h-screen bg-gradient-to-br from-green-500 via-emerald-600 to-teal-500 flex flex-col">
      <div className="bg-gradient-to-r from-yellow-400 to-green-400 text-black font-bold py-3 px-6 border-b-4 border-green-600">
        <div className="flex items-center justify-center gap-2">
          <Zap className="w-6 h-6" />
          <span className="text-lg">🎉 CONGRATULATIONS, YOU SURVIVED! 🎉</span>
          <Zap className="w-6 h-6" />
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-6">
        <div className="bg-black/20 backdrop-blur-sm border-4 border-yellow-400 rounded-2xl p-8 w-full max-w-lg text-center">
          <div className="text-8xl mb-6">🏆</div>
          <h1 className="text-yellow-400 font-black text-3xl mb-4">
            WELCOME TO THE UGLY CLUB!
          </h1>
          <div className="bg-green-600 border-4 border-yellow-400 rounded-xl p-6">
            <p className="text-yellow-300 text-lg font-bold">
              You've successfully admitted your ugliness and passed all our impossible tests!
              <br />
              <span className="text-yellow-400">💀 Achievement Unlocked: Self-Awareness 💀</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPopup = () => (
    showPopup && (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-gradient-to-br from-red-600 to-red-800 border-4 border-yellow-400 rounded-2xl p-6 max-w-md w-full animate-pulse">
          <div className="text-center">
            <div className="text-6xl mb-4">💀</div>
            <h3 className="text-yellow-400 font-black text-xl mb-4">ROASTED!</h3>
            <p className="text-yellow-300 font-bold text-lg">{popupMessage}</p>
          </div>
        </div>
      </div>
    )
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'login':
        return renderLogin();
      case 'mirror':
        return (
          <div className="min-h-screen bg-gradient-to-br from-red-500 via-red-600 to-orange-500 flex flex-col">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold py-3 px-6 border-b-4 border-red-600">
              <div className="flex items-center justify-center gap-2">
                <Camera className="w-6 h-6" />
                <span className="text-lg">📸 UGLINESS DETECTION IN PROGRESS 📸</span>
                <Camera className="w-6 h-6" />
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center p-6">
              <div className="bg-black/20 backdrop-blur-sm border-4 border-yellow-400 rounded-2xl p-8 w-full max-w-lg text-center">
                <div className="mb-8">
                  <div className="text-8xl mb-6 animate-bounce">🪞</div>
                  <div className="bg-red-600 border-4 border-yellow-400 rounded-xl p-6 mb-6">
                    <h2 className="text-yellow-400 font-black text-2xl mb-4">
                      💥 MIRROR CHECK FAILED 💥
                    </h2>
                    <p className="text-yellow-300 text-lg font-bold leading-relaxed">
                      Oops! System crashed while trying to recognize that face.
                      <br />
                      <span className="text-red-300">Please try again after 10 years.</span>
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setCurrentStep('math')}
                  className="bg-gradient-to-r from-orange-500 to-red-600 text-yellow-400 font-black text-xl py-4 px-8 rounded-xl border-3 border-yellow-400 hover:from-orange-600 hover:to-red-700 hover:scale-105 transform transition-all duration-200 shadow-lg"
                >
                  🔥 TRY ANOTHER WAY 🔥
                </button>
              </div>
            </div>
          </div>
        );
      case 'math':
        return renderMath();
      case 'security':
        return renderSecurity();
      case 'success':
        return renderSuccess();
      default:
        return renderLogin();
    }
  };

  return (
    <div>
      {renderCurrentStep()}
      {renderPopup()}
    </div>
  );
}

export default App;