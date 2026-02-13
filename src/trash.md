# cercle de decgradé lumineux

exemple: 
 background: radial-gradient(circle at 30% 30%, 
    rgba(0, 212, 255, 0.6) 0%, 
    rgba(0, 212, 255, 0.2) 50%, 
    transparent 70%);

explication:
radial-gradient(   → Crée un dégradé RADIAL (cercle/ellipse)
  circle          → FORME = CERCLE parfait (pas ellipse)
  at 30% 30%      → CENTRE du dégradé = 30% du cercle en X/Y
  rgba(0,212,255,0.6) 0%,   → AU CENTRE : CYAN très lumineux
  rgba(0,212,255,0.2) 50%,  → À 50% du rayon : cyan transparent
  transparent 70%           → À 70% : invisible

visuel : 
     CENTRE (30%,30%)
        ⭐ Très lumineux
     /             \
   ⭐ Transparent   Transparent ⭐
     \             /
        Transparent (bord)


# animation d'un element : exxemple du cercle lumineux

syntaxe=> animation: floatBalloon 4s ease-in-out infinite

floatBalloon    → NOM de l'animation (@keyframes)
4s              → DURÉE complète (4 secondes)
ease-in-out     → ACCÉLÉRATION douce (pas brusque)
infinite        → REPLAY ∞ boucle

# box shadow

syntaxe=> box-shadow:  0 0 50px rgba(0,212,255,0.5),        → ✅ GLOW extérieur
  inset 0 0 50px rgba(255,255,255,0.1); → ✅ LUMIÈRE intérieure

explication : 
0 0 50px     → X=0 Y=0 RAYON=50px
inset         → À L'INTÉRIEUR du cercle

nb: x= decalage par rapport a l'axe des abcisse(horizontal) et y = decalage par rapport a l'axe des (vertical)) , rayon = flou/etendu

# les keyframes : avec floatballoon = nom de l'animation

exemple:
syntaxe => @keyframes floatBalloon {
  0%     → translateY(0) scale(1) rotate(0deg)     [POSITION START]
  33%    → translateY(-30px) scale(1.05) rotate(2deg)  [HAUT max]
  66%    → translateY(-15px) scale(0.98) rotate(-1deg) [MILIEU]
  100%   → translateY(0) scale(1) rotate(0deg)     [POSITION START]
}
explication:
0%  → Position normale
33% → Monte 30px + grossit 5% + tourne 2°
66% → Milieu + rétrécit 2% + tourne -1°  
100%→ Retour normale




