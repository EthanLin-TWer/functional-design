;; tail-call optimized version
(defn fibs-work-tco [n i fs]
  (if (= i n)
    fs
    (recur n (inc i) (conj fs (apply + (take-last 2 fs))))))

(defn fibs-tco [n]
  (cond
    (< n 1) []
    (= n 1) [1]
    :else (fibs-work-tco n 2 [1 1])
  )
)

(println (str "Fibs(2): " (fibs-tco 2)))
(println (str "Fibs(3): " (fibs-tco 3)))
(println (str "Fibs(4): " (fibs-tco 4)))
(println (str "Fibs(5): " (fibs-tco 5)))
(println (str "Fibs(12): " (fibs-tco 12)))
(println (str "Fibs(15): " (fibs-tco 15)))
(println (str "Fibs(20): " (fibs-tco 20)))

;; recursive version
(defn fibs-work-rec [n]
  (cond
    (< n 1) nil
    (<= n 2) 1
    :else (+ (fibs-work-rec (dec n)) (fibs-work-rec (- n 2)))
  )
)

(defn fibs-rec [n]
  (map fibs-work-rec (range 1 (inc n)))
)

(println (str "Fibs(2): " (vec (fibs-rec 2))))
(println (str "Fibs(3): " (vec (fibs-rec 3))))
(println (str "Fibs(4): " (vec (fibs-rec 4))))
(println (str "Fibs(5): " (vec (fibs-rec 5))))
(println (str "Fibs(12): " (vec (fibs-rec 12))))
(println (str "Fibs(15): " (vec (fibs-rec 15))))
(println (str "Fibs(20): " (vec (fibs-rec 20))))
