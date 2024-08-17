(defn fibs-work [n i fs]
  (if (= i n)
    fs
    (fibs-work n (inc i) (conj fs (apply + (take-last 2 fs))))))

(defn fibs [n]
  (cond
    (< n 1) []
    (= n 1) [1]
    :else (fibs-work n 2 [1 1])
  )
)

(println (str "Fibs(2): " (fibs 2)))
(println (str "Fibs(3): " (fibs 3)))
(println (str "Fibs(4): " (fibs 4)))
(println (str "Fibs(5): " (fibs 5)))
(println (str "Fibs(12): " (fibs 12)))
(println (str "Fibs(15): " (fibs 15)))
(println (str "Fibs(20): " (fibs 20)))
