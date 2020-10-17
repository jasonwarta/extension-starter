��#   e x t e n s i o n - s t a r t e r 
 
 
 
 # #   E x t e n s i o n   B a s i c s 
 
 
 
 A   b r o w s e r   e x t e n s i o n   r e q u i r e s   a   m a n i f e s t . j s o n   f i l e .   T h i s   i n c l u d e s   3   r e q u i r e d   f i e l d s :   ` m a n i f e s t _ v e r s i o n ` ,   ` n a m e ` ,   a n d   ` v e r s i o n ` ,   a n d   a   f e w   d o z e n   o p t i o n a l   f i e l d s .   M o s t   o f   t h e   f i e l d s   a r e   c o n s i s t e n t l y   n a m e d   b e t w e e n   c h r o m e   a n d   f i r e f o x   e x t e n s i o n s . 
 
 
 
 D e t a i l s   o n   t h e   l i s t   o f   f i e l d s   t h a t   c a n   b e   p r o v i d e d   i n   t h e   m a n i f e s t   a r e   f o u n d   h e r e . 
 
 
 
 -   [ C h r o m e ] ( h t t p s : / / d e v e l o p e r . c h r o m e . c o m / e x t e n s i o n s / m a n i f e s t ) 
 
 -   [ F i r e f o x ] ( h t t p s : / / d e v e l o p e r . m o z i l l a . o r g / e n - U S / d o c s / M o z i l l a / A d d - o n s / W e b E x t e n s i o n s / m a n i f e s t . j s o n ) 
 
 
 
 # #   I n c l u d e d   S t r u c t u r e 
 
 
 
 # # #   [ b a c k g r o u n d ] ( e x t e n s i o n s / s r c / b g / R E A D M E . m d ) 
 
 
 
 T h e   b a c k g r o u n d   e n t r y   i n   t h e   m a n i f e s t   c a n   b e   u s e d   t o   l o a d   s c r i p t s   t o   r u n   i n   t h e   b a c k g r o u n d   o f   y o u r   e x t e n s i o n .   I n   m o s t   c a s e s   y o u   w i l l   n o t   n e e d   t o   s e t   a   s c r i p t   a s   p e r s i s t e n t . 
 
 
 
 ` ` ` j s o n     {         " n a m e " :   " E x t e n s i o n   S t a r t e r " ,         . . .         " b a c k g r o u n d " :   {             " s c r i p t s " :   [ " b a c k g r o u n d . j s " ] ,             " p e r s i s t e n t " :   f a l s e         } ,         . . .     }     ` ` ` 
 
 
 
 -   [ C h r o m e   d o c u m e n t a t i o n ] ( h t t p s : / / d e v e l o p e r . c h r o m e . c o m / e x t e n s i o n s / b a c k g r o u n d * p a g e s ) 
 
 -   [ M o z i l l a   D o c u m e n t a t i o n ] ( h t t p s : / / d e v e l o p e r . m o z i l l a . o r g / e n - U S / d o c s / M o z i l l a / A d d - o n s / W e b E x t e n s i o n s / m a n i f e s t . j s o n / b a c k g r o u n d ) 
 
 
 
 # # #   [ c o m m o n ] ( s r c / c o m m o n / R E A D M E . m d ) 
 
 
 
 T h i s   i s n ' t   a   r e q u i r e d   c o m p o n e n t   o f   a n   e x t e n s i o n ,   b u t   i s   i n c l u d e d   t o   e n c o u r a g e   r e f a c t o r i n g   u t i l i t y   f u n c t i o n s   o u t   o f   a   s p e c i f i c   e x e c u t i o n   c o n t e x t .   T h e   r e a s o n   f o r   t h i s   i s   t h a t   i f   y o u   i m p o r t   a   f u n c t i o n   f r o m   o n e   c o n t e x t   t o   a n o t h e r ,   w e b p a c k   w i l l   b u n d l e   t h e   c o n t e x t s   t o g e t h e r   w h e n   b u i l d i n g ,   w h i c h   c a n   l e a d   t o   a l l   s o r t s   o f   s t r a n g e   p r o b l e m s   t h a t   c a n   b e   v e r y   d i f f i c u l t   t o   d e b u g . 
 
 
 
 # # #   [ c o n t e n t   s c r i p t s ] ( s r c / c o m m o n / R E A D M E . m d ) 
 
 
 
 C o n t e n t   s c r i p t s   a r e   i n j e c t e d   i n t o   a   w e b s i t e   t o   e x e c u t e   c u s t o m   c o d e .   T h i s   c a n   b e   u s e d   t o   p a r s e   i n f o r m a t i o n   f r o m   a   s i t e ,   i n j e c t   c s s ,   o r   a n y t h i n g   e l s e   y o u   m i g h t   w a n t   t o   d o . 
 
 
 
 I f   y o u   n e e d   t o   i n j e c t   s i t e - s p e c i f i c   c o n t e n t   s c r i p t s   i n t o   m u l t i p l e   w e b s i t e s ,   y o u   s h o u l d   p r o b a b l y   b r e a k   t h i s   s e c t i o n   d o w n   f u r t h e r   i n t o   c o n t e n t   s c r i p t s   f o r   e a c h   s i t e ,   a n d   c o n f i g u r e   w e b p a c k   t o   o u t p u t   a d d i t i o n a l   b u i l d s   a s   n e c e s s a r y ,   t o   k e e p   y o u r   i n j e c t e d   s c r i p t s   a s   s m a l l   a s   p o s s i b l e . 
 
 
 
 ` ` ` j s o n 
 
 { 
 
     " n a m e " :   " E x t e n s i o n   S t a r t e r " , 
 
     . . . 
 
     " c o n t e n t * s c r i p t s " :   [ 
 
         { 
 
             " m a t c h e s " :   [ " < a l l _ u r l s > " ] , 
 
             " c s s " :   [ " m y S t y l e s . c s s " ] , 
 
             " j s " :   [ " c o n t e n t S c r i p t . j s " ] 
 
         } 
 
     ] , 
 
     . . . 
 
 } 
 
 ` ` `         -   [ C h r o m e   d o c u m e n t a t i o n ] ( h t t p s : / / d e v e l o p e r . c h r o m e . c o m / e x t e n s i o n s / c o n t e n t _ s c r i p t s )     -   [ M o z i l l a   D o c u m e n t a t i o n ] ( h t t p s : / / d e v e l o p e r . m o z i l l a . o r g / e n - U S / d o c s / M o z i l l a / A d d - o n s / W e b E x t e n s i o n s / m a n i f e s t . j s o n / c o n t e n t _ s c r i p t s )         # # #   [ o p t i o n s ] ( s r c / o p t i o n s / R E A D M E . m d )         T h e   o p t i o n s   p a g e   c a n   b e   w r i t t e n   i n   h t m l ,   c s s ,   a n d   j s ,   a n d   s h o u l d   u s e   b r o w s e r   A P I s   t o   c o m m u n i c a t e   u s e r   s e t t i n g s   t o   t h e   r e s t   o f   t h e   e x t e n s i o n .         ` ` ` j s o n 
 
 { 
 
     " n a m e " :   " E x t e n s i o n   S t a r t e r " , 
 
     . . . 
 
     " o p t i o n s * u i " :   { 
 
         " p a g e " :   " o p t i o n s . h t m l " , 
 
         " o p e n * i n * t a b " :   f a l s e 
 
     } , 
 
     . . . 
 
 } 
 
 ` ` ` 
 
 
 
 -   [ C h r o m e   D o c u m e n t a t i o n ] ( h t t p s : / / d e v e l o p e r . c h r o m e . c o m / e x t e n s i o n s / o p t i o n s # e m b e d d e d * o p t i o n s ) 
 
 -   [ M o z i l l a   D o c u m e n t a t i o n ] ( h t t p s : / / d e v e l o p e r . m o z i l l a . o r g / e n - U S / d o c s / M o z i l l a / A d d - o n s / W e b E x t e n s i o n s / m a n i f e s t . j s o n / o p t i o n s * u i ) 
 
 
 
 # # #   [ p o p u p ] ( s r c / p o p u p / R E A D M E . m d ) 
 
 
 
 T h e   p o p u p   a l l o w s   y o u   t o   p r o v i d e   m o r e   u s e r   i n t e r a c t i o n   t o   y o u r   e x t e n s i o n . 
 
 
 
 ` ` ` j s o n 
 
 { 
 
     " n a m e " :   " E x t e n s i o n   S t a r t e r " , 
 
     . . . 
 
     " b r o w s e r * a c t i o n " :   { 
 
         " d e f a u l t * i c o n " :   {                                         
 
             " 1 6 " :   " i m a g e s / i c o n 1 6 . p n g " ,                       
 
             " 2 4 " :   " i m a g e s / i c o n 2 4 . p n g " ,                       
 
             " 3 2 " :   " i m a g e s / i c o n 3 2 . p n g "                         
 
         } , 
 
         " d e f a u l t * t i t l e " :   " E x t e n s i o n   S t a r t e r " ,             
 
         " d e f a u l t * p o p u p " :   " p o p u p . h t m l "                 
 
     } , 
 
     . . . 
 
 } 
 
 ` ` ` 
 
 
 
 -   [ C h r o m e   D o c u m e n t a t i o n ] ( h t t p s : / / d e v e l o p e r . c h r o m e . c o m / e x t e n s i o n s / b r o w s e r A c t i o n ) 
 
 -   [ M o z i l l a   D o c u m e n t a t i o n ] ( h t t p s : / / d e v e l o p e r . m o z i l l a . o r g / e n - U S / d o c s / M o z i l l a / A d d - o n s / W e b E x t e n s i o n s / m a n i f e s t . j s o n / b r o w s e r * a c t i o n ) 
