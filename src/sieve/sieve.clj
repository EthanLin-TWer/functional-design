;; Define a function that returns a closure
(defn outer-function [x]
  (fn [y]
    (println "x:" x)
    (println "y:" y)
    (+ x y)))

;; Create a closure by calling outer-function
(def my-closure (outer-function 10))

;; Call the closure with a new value
(my-closure 5)
